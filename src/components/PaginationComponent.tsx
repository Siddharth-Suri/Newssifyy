import { pageSize } from "../utils/utils"
import { StoryAtom } from "../state/Story"
import { useRecoilState, useRecoilValue } from "recoil"
import LeftButton from "../assets/LeftButton.jsx"
import RightButton from "../assets/RightButton.jsx"
import {
    LowerPageNumberAtom,
    UpperPageNumberAtom,
} from "../state/PageNumber.js"
export const PaginationComponent = (props) => {
    const [currentLower, setCurrentLower] = useRecoilState(LowerPageNumberAtom)
    const [currentUpper, setCurrentUpper] = useRecoilState(UpperPageNumberAtom)

    const totalProducts = useRecoilValue(StoryAtom)
    const sizeOfTotalProducts = totalProducts.length
    const sizeofProductsPaged = sizeOfTotalProducts / pageSize
    return (
        <div className="flex p-2 bg-black text-white text-xl">
            <div
                className="p-2"
                onClick={() => {
                    setCurrentLower((prev) => prev - 10)
                    setCurrentUpper((prev) => prev - 10)
                }}
            >
                <LeftButton></LeftButton>
            </div>
            <div className="flex p-2">
                <div className="pl-1 pr-1">{currentLower / 10}</div>
                <div className="pl-1 pr-1">/</div>
                <div className="pl-1 pr-1">{sizeofProductsPaged}</div>
            </div>

            <div
                className="p-2"
                onClick={() => {
                    setCurrentLower((prev) => prev + 10)
                    setCurrentUpper((prev) => prev + 10)
                }}
            >
                <RightButton></RightButton>
            </div>
        </div>
    )
}
