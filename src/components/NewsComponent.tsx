import { StarIcon } from "../assets/StarIcon"
interface Comments {
    author: string
    text: string
}
interface NewsVariables {
    title: string
    author: string
    comments: Comments[]
    points: number
    date: Date
}

export function NewsComponent(props: NewsVariables) {
    return (
        <div className="p-2 text-white bg-black  hover:opacity-90 hover:rounded-2xl transition-all duration-200">
            <div className="p-2 font-bold text-2xl">{props.title}</div>
            <div className="flex gap-1 p-2">
                <div className="">By: </div>
                <div className="cursor-pointer underline text-amber-500">
                    {" "}
                    {props.author}
                </div>
            </div>
            <div className="flex">
                <div className="p-2 cursor-pointer underline text-amber-500">
                    {props.comments.length} comments
                </div>
                <div className="flex gap-1 p-2 items-center">
                    <StarIcon></StarIcon>
                    <span>{props.points}</span>
                </div>
                <div className="p-2">{props.date.toLocaleDateString()}</div>
            </div>
        </div>
    )
}
