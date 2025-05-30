import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { topStoriesType } from "../utils/api"

export const CommentComponent = (props: topStoriesType) => {
    const id = useParams()
    useEffect(() => {}, [id])
    return (
        <div>
            <div className="flex">
                <div>{props.by}</div>
                <div>{props.time}</div>
            </div>
            <div>{props.text}</div>
        </div>
    )
}
