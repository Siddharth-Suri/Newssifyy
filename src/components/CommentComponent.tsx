import { commentType } from "../utils/api"

export const CommentComponent = (props: commentType) => {
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
