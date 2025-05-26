import loadingGif from "../assets/Loading.gif"

export const Skeleton = () => {
    return (
        <div className="flex items-center bg-black text-amber-50 h-dvh">
            <img className="h-12 w-12" src={loadingGif} alt="Loading..."></img>
        </div>
    )
}
