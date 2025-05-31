import { StarIcon } from "../assets/StarIcon"
import { topStoriesType } from "../utils/api"
import { CommentIcon } from "../assets/CommentIcon"
import { useNavigate } from "react-router-dom"

export function NewsComponent(props: topStoriesType) {
    const navigate = useNavigate()

    function navigateToUser(id: string) {
        navigate(`/user/${id}`)
    }

    function navigateToComments(id: number) {
        navigate(`/story/${id}`)
    }

    return (
        <div className="p-2  sm:xlmd:2xl lg:w-3xl border-b-2 mb-2 border-neutral-800 container mx-auto text-neutral-100 bg-black  hover:opacity-95 hover:rounded-2xl hover:bg-neutral-900 hover:pt-4  transition-all duration-200">
            <div className="flex flex-wrap p-2 font-bold text-lg ">
                <div className="hover:text-blue-400 hover:underline">
                    <a href={props.url} target="_blank" className="">
                        {props.title}
                    </a>
                </div>
            </div>
            <div className="flex text-sm gap-1 p-2 text-gray-400">
                <div>by: </div>
                <div
                    className="cursor-pointer hover:underline text-blue-300 "
                    onClick={() => {
                        navigateToUser(props.by)
                    }}
                >
                    {props.by}
                </div>
            </div>
            <div className="flex text-sm  text-gray-400 ">
                <div className="flex pt-2 pl-2 pb-2 bg-opacity-80 cursor-pointer  hover:underline text-blue-300  justify-center items-center  ">
                    <span className="pr-1">
                        <CommentIcon></CommentIcon>
                    </span>
                    <div
                        className="border-r-2 pr-2 border-neutral-700"
                        onClick={() => {
                            navigateToComments(props.id)
                        }}
                    >
                        {props.descendants} comments
                    </div>
                </div>
                <div className="flex gap-1 pt-2 pl-2 pb-2 items-center text-gray-400 ">
                    <StarIcon></StarIcon>
                    <span className="pr-2 border-r-2 border-neutral-700">
                        {props.score}
                    </span>
                </div>
                <div className="p-2 text-gray-400">
                    {new Date(props.time * 1000).toLocaleDateString()}
                </div>
            </div>
        </div>
    )
}
