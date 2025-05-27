import { useEffect } from "react"
import { requestById, topStoriesRequest } from "../utils/api"
import { NewsComponent } from "./NewsComponent"
import { useRecoilState } from "recoil"
import { StoryByIdAtom } from "../state/StoryById"
import { StoryAtom } from "../state/Story"
import { SelectionType } from "../state/SelectionType"
import { LowerPageNumberAtom, UpperPageNumberAtom } from "../state/PageNumber"
import { Dispatch, SetStateAction } from "react"

interface HomePageProps {
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
}

export const HomePage = ({ setLoading }: HomePageProps) => {
    const [allStories, setAllStories] = useRecoilState(StoryAtom)
    const [storiesById, setStoriesById] = useRecoilState(StoryByIdAtom)
    const [typeOfSelection] = useRecoilState(SelectionType)
    const [currentLower] = useRecoilState(LowerPageNumberAtom)
    const [currentUpper] = useRecoilState(UpperPageNumberAtom)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await topStoriesRequest(typeOfSelection)
                setAllStories(data)
            } catch (err) {
                console.log("There was an error")
            }
        }
        fetchData()
    }, [typeOfSelection])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const slicedData = allStories.slice(currentLower, currentUpper)
                const stories = await Promise.all(
                    slicedData.map((id) => requestById(id))
                )
                setStoriesById(stories)
            } catch {
                console.log("Data couldn't be mapped")
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [allStories, currentLower, currentUpper])

    return (
        <div className="min-h-screen justify-center">
            {/* {loading ? (
                <Skeleton></Skeleton>
            ) : (
                storiesById.map((story) => (
                    <NewsComponent key={story.id} {...story} />
                ))
            )} */}
            {storiesById.map((story) => (
                <NewsComponent key={story.id} {...story} />
            ))}
        </div>
    )
}
