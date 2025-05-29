import { useNavigate } from "react-router-dom"

export function TopBar() {
    const navigate = useNavigate()
    const NavigateToHome = () => {
        navigate("/")
    }
    return (
        <div className="flex justify-center items-center bg-black p-4">
            <div className="w-3xl">
                <div className="flex p-2 justify-between items-center ">
                    <div
                        className="flex  text-2xl text-amber-500  font-medium text-center item-center cursor-pointer"
                        onClick={() => {
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
                        <div className="text-amber-500 p-2 text-center cursor-pointer item-center underline">
                            github
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
