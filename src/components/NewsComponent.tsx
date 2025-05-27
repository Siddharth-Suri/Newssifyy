import { StarIcon } from "../assets/StarIcon"
import { topStoriesType } from "../utils/api"

export function NewsComponent(props: topStoriesType) {
    return (
        <div className="p-2 border-b-2 mb-2 border-neutral-800 container mx-auto text-white bg-black  hover:opacity-95 hover:rounded-2xl hover:bg-neutral-900 hover:pt-4  transition-all duration-200">
            <div className="flex flex-wrap p-2 font-bold text-lg w-4xl">
                {props.title}
            </div>
            <div className="flex text-sm gap-1 p-2">
                <div>By: </div>
                <div className="cursor-pointer underline text-amber-500">
                    {props.by}
                </div>
            </div>
            <div className="flex text-sm">
                <div className="p-2 cursor-pointer hover:underline text-amber-500">
                    {props.descendants} comments
                </div>
                <div className="flex gap-1 p-2 items-center">
                    <StarIcon></StarIcon>
                    <span>{props.score}</span>
                </div>
                <div className="p-2">{props.time}</div>
            </div>
        </div>
    )
}
