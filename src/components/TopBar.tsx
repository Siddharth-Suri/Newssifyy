export function TopBar() {
    return (
        <div className="flex justify-center items-center bg-black p-4">
            <div className="w-4xl">
                <div className="flex p-2 justify-between items-center ">
                    <div
                        className="flex  text-2xl text-amber-500  font-medium text-center item-center cursor-pointer"
                        onClick={() => {
                            window.location.reload()
                        }}
                    >
                        <div className=" text-white">News</div>

                        <div className="">sifyy</div>
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
