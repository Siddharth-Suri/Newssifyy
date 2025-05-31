import { useEffect, useState } from "react"
import { requestById, topStoriesType } from "../utils/api"
import parse from "html-react-parser"
import { useNavigate } from "react-router-dom"
export const ChildCommentComponent = ({ id }: { id: number }) => {
    const [childComment, setChildComment] = useState<topStoriesType | null>(
        null
    )

    const navigate = useNavigate()
    function navigateToUser(id: string) {
        navigate(`/user/${id}`)
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await requestById(id)
            if (data) {
                setChildComment(data)
            }
        }
        fetchData()
    }, [id])

    if (!childComment)
        return <div className="ml-4 text-neutral-500">Loading...</div>

    return (
        <div className="ml-4 w-full max-w-3xl border-l container break-words border-neutral-700 pl-4 py-2">
            {childComment.text ? (
                <div className="pb-2">
                    <div className="p-1 items-center text-sm text-neutral-400 flex gap-2">
                        <span
                            className="text-blue-400 hover:underline cursor-pointer"
                            onClick={() => {
                                navigateToUser(childComment.by)
                            }}
                        >
                            {childComment.by}
                        </span>
                        <span>
                            {new Date(
                                childComment.time * 1000
                            ).toLocaleDateString()}
                        </span>
                    </div>
                    <div className="text-neutral-200 w-full max-w-full break-words whitespace-pre-wrap overflow-auto">
                        {parse(childComment.text)}
                    </div>
                </div>
            ) : (
                <div className="text-stone-500 italic text-sm">[deleted]</div>
            )}

            {Array.isArray(childComment.kids) &&
                childComment.kids.map((kidId) => (
                    <ChildCommentComponent key={kidId} id={kidId} />
                ))}
        </div>
    )
}
