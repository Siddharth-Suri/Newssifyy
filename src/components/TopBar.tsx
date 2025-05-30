import { useNavigate } from "react-router-dom"
import { LowerPageNumberAtom, UpperPageNumberAtom } from "../state/PageNumber"
import { useSetRecoilState } from "recoil"

export function TopBar() {
    const setCurrentLower = useSetRecoilState(LowerPageNumberAtom)
    const setCurrentUpper = useSetRecoilState(UpperPageNumberAtom)
    const navigate = useNavigate()
    const NavigateToHome = () => {
        navigate("/")
    }
    return (
        <div className="flex justify-center items-center bg-black p-4">
            <div className="w-3xl">
                <div className="flex p-2 justify-between items-center ">
                    <div
                        className="flex  text-2xl text-blue-500   font-medium text-center item-center cursor-pointer"
                        onClick={() => {
                            setCurrentLower(0)
                            setCurrentUpper(10)
                            NavigateToHome()
                        }}
                    >
                        <div className="font-light text-white">News</div>

                        <div className=" font-bold">sifyy</div>
                    </div>
                    <a
                        href="https://github.com/Siddharth-Suri/The-News"
                        target="_blank"
                    >
                        <div className="text-blue-500  p-2 text-center cursor-pointer item-center underline">
                            github
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
