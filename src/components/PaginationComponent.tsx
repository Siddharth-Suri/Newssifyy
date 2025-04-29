import { useState } from "react"
import { pageSize } from "../utils/utils"
import { topStoriesRequest } from "../utils/api"
import { StoryAtom } from "../state/Story"
import { useRecoilValue } from "recoil"

export const PaginationComponent = (props) => {
    const [currentPage, setCurrentPage] = useState(0)
    const totalProducts = useRecoilValue(StoryAtom)
    const sizeOfTotalProducts = totalProducts.length
    return (
        <div className="flex p-2 bg-black text-white text-xl">
            <div className="p-2">◀️</div>
            <div className="p-2">{currentPage}</div>
            <div className="p-2">{pageSize}</div>
            <div className="p-2">▶️</div>
        </div>
    )
}
