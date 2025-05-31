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
        <div className="flex justify-center font-bold items-center  p-4">
            <div className="w-3xl">
                <div className="flex p-2 justify-between items-center ">
                    <div
                        className="flex text-2xl text-blue-500 text-center item-center cursor-pointer"
                        onClick={() => {
                            setCurrentLower(0)
                            setCurrentUpper(10)
                            NavigateToHome()
                        }}
                    >
                        <div className=" font-bold text-white">News</div>

                        <div className=" font-bold">sifyy</div>
                    </div>
                    <a
                        href="https://github.com/Siddharth-Suri/The-News"
                        target="_blank"
                    >
                        <div className="text-blue-500 font-extrabold p-2 text-sm text-center cursor-pointer item-center underline">
                            github
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
