export function TopBar() {
    return (
        <div className="flex justify-center items-center bg-black p-4">
            <div className="w-3xl">
                <div className="flex p-2 justify-between items-center ">
                    <div className="flex gap-2 text-2xl text-amber-400  font-medium text-center item-center cursor-pointer">
                        <div className="overline ">The</div>

                        <span className="text-amber-50">News</span>
                    </div>
                    <div className="text-amber-400 p-2 text-center cursor-pointer item-center underline">
                        github
                    </div>
                </div>
            </div>
        </div>
    )
}
