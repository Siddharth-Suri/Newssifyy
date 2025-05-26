import { sizeofProductsPagedSelector } from "../state/Story"
import { useRecoilState, useRecoilValue } from "recoil"
import LeftButton from "../assets/LeftButton.tsx"
import RightButton from "../assets/RightButton.tsx"
import {
    LowerPageNumberAtom,
    UpperPageNumberAtom,
} from "../state/PageNumber.js"
import FarLeftButton from "../assets/FarLeftButton.tsx"
import FarRightButton from "../assets/FarRightButton.tsx"

export const PaginationComponent = () => {
    const [currentLower, setCurrentLower] = useRecoilState(LowerPageNumberAtom)
    const [currentUpper, setCurrentUpper] = useRecoilState(UpperPageNumberAtom)

    // const totalProducts = useRecoilValue(StoryAtom)
    // const sizeOfTotalProducts = totalProducts.length
    const sizeofProductsPaged = useRecoilValue(sizeofProductsPagedSelector)
    return (
        <div className="flex p-2 bg-black text-white text-xl">
            <div
                className="p-2"
                onClick={() => {
                    setCurrentLower(0)
                    setCurrentUpper(10)
                }}
            >
                <FarLeftButton disabled={currentLower === 0}></FarLeftButton>
            </div>
            <div
                className="p-2"
                onClick={() => {
                    setCurrentLower((prev) => prev - 10)
                    setCurrentUpper((prev) => prev - 10)
                }}
            >
                <LeftButton disabled={currentLower === 0}></LeftButton>
            </div>
            <div className="flex p-2">
                <div className="pl-2 pr-2 text-amber-400 font-bold">
                    {currentLower / 10}
                </div>
                <div className="pl-2 pr-2 font-bold">/</div>
                <div className="pl-2 pr-2 font-bold">{sizeofProductsPaged}</div>
            </div>

            <div
                className="p-2"
                onClick={() => {
                    setCurrentLower((prev) => prev + 10)
                    setCurrentUpper((prev) => prev + 10)
                }}
            >
                <RightButton disabled={currentUpper === 500}></RightButton>
            </div>
            <div
                className="p-2"
                onClick={() => {
                    setCurrentLower(490)
                    setCurrentUpper(500)
                }}
            >
                <FarRightButton
                    disabled={currentUpper === 500}
                ></FarRightButton>
            </div>
        </div>
    )
}
