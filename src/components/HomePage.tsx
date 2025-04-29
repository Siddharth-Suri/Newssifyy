import { useEffect, useState } from "react"
import { topStoriesRequest } from "../utils/api"
import { NewsComponent } from "./NewsComponent"

export const HomePage = () => {
    const [allStories, setAllStories] = useState<number[]>([])
    const typeOfSelection = "top"
    //this is done because useEffect itself cannot be async therefore
    //we create a function to be asnyc which can provide us the data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await topStoriesRequest(typeOfSelection)
                console.log(data)
            } catch (err) {
                console.log("There was an error")
            }
        }
        fetchData()
    }, [typeOfSelection])

    return <div></div>
}
