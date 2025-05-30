import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { requestById, topStoriesType } from "../utils/api"
// import parse from "html-react-parser"
import { useNavigate } from "react-router-dom"
import { StarIcon } from "../assets/StarIcon"
// props: topStoriesType to be added as props
export const CommentComponent = () => {
    const navigate = useNavigate()
    function navigateToUser(id: string) {
        navigate(`/user/${id}`)
    }
    const { id } = useParams()
    const [commentStory, setCommentStory] = useState<topStoriesType | null>(
        null
    )

    useEffect(() => {
        async function fetchData() {
            if (id) {
                const res = await requestById(Number(id))
                setCommentStory(res)
            }
        }
        fetchData()
    }, [id])
    if (!commentStory) {
        return (
            <div className="flex justify-center text-xl text-neutral-400">
                Loading...
            </div>
        )
    }
    return (
        <div className="p-1 sm:xlmd:2xl lg:w-3xl  mb-2  pt-4 pb-4 container mx-auto text-neutral-100 bg-black item-center">
            <div>
                <div className="text-3xl p-2 pt-4 pb-4 font-normal">
                    {commentStory.title}
                </div>
                <div className="flex pl-2 text-sm gap-0 text-white">
                    <div className="flex items-center pr-2 border-r-2 border-neutral-700 text-neutral-400">
                        by:
                        <span
                            className="pl-1 text-blue-400 cursor-pointer hover:underline"
                            onClick={() => {
                                navigateToUser(commentStory.by)
                            }}
                        >
                            {commentStory.by}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 px-2 border-r-2 border-neutral-700 text-neutral-400">
                        <StarIcon></StarIcon>
                        {commentStory.score}
                    </div>
                    <div className="flex items-center pl-2 text-neutral-400">
                        {new Date(
                            commentStory.time * 1000
                        ).toLocaleDateString()}
                    </div>
                </div>

                <div className="p-2 text-yellow-600">
                    <a
                        href={commentStory.url}
                        target="_blank "
                        className="underline"
                    >
                        {commentStory.url}
                    </a>
                </div>

                <div className="p-2 pt-4 pb-4 text-xl font-normal text-neutral-300">
                    Comments ({commentStory.descendants}) :
                </div>
            </div>
        </div>
    )
}
// {commentStory.text ? (
//                         <div>{parse(commentStory.text || "")}</div>
//                     ) : (
//                         <div>Null</div>
//                     )}
