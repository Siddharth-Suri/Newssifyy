export function TopBar() {
    return (
        <div className="flex justify-center items-center bg-black p-4">
            <div className="w-3xl">
                <div className="flex p-4 justify-between items-center ">
                    <div className="text-2xl text-amber-50 font-medium text-center item-center cursor-pointer">
                        hacknio
                    </div>
                    <div className="text-amber-400 text-center cursor-pointer item-center underline">
                        github
                    </div>
                </div>
            </div>
        </div>
    )
}
