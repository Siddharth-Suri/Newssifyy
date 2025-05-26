import { useEffect } from "react"
import { requestById, topStoriesRequest } from "../utils/api"
import { NewsComponent } from "./NewsComponent"

import { StoryByIdAtom } from "../state/StoryById"
import { StoryAtom } from "../state/Story"
import { SelectionType } from "../state/SelectionType"
import { useRecoilState } from "recoil"
import { LowerPageNumberAtom, UpperPageNumberAtom } from "../state/PageNumber"
export const HomePage = () => {
    const [allStories, setAllStories] = useRecoilState(StoryAtom)
    const [storiesById, setStoriesById] = useRecoilState(StoryByIdAtom)
    const [typeOfSelection, setTypeOfSelection] = useRecoilState(SelectionType)
    const [currentLower, setCurrentLower] = useRecoilState(LowerPageNumberAtom)
    const [currentUpper, setCurrentUpper] = useRecoilState(UpperPageNumberAtom)

    //this is done because useEffect itself cannot be async therefore
    //we create a function to be asnyc which can provide us the data

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await topStoriesRequest(typeOfSelection)
                setAllStories(data)
                console.log(data)
            } catch (err) {
                console.log("There was an error")
            }
        }
        fetchData()
    }, [typeOfSelection])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const slicedData = allStories.slice(currentLower, currentUpper)
                const stories = await Promise.all(
                    slicedData.map((id) => {
                        return requestById(id)
                    })
                )
                setStoriesById(stories)
            } catch {
                console.log("Data couldn't be mapped")
            }
        }
        fetchData()
    }, [allStories, currentLower, currentUpper])

    return (
        <div>
            {storiesById.map((story) => {
                return <NewsComponent key={story.id} {...story}></NewsComponent>
            })}
        </div>
    )
}
