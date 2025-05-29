import { requestByUser, userReqestType } from "../utils/api"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export const UserInterface = () => {
    const { id } = useParams<{ id: string }>()
    const [userData, setUserData] = useState<userReqestType | null>(null)

    useEffect(() => {
        async function fetchData() {
            if (id) {
                const res = await requestByUser(id)
                console.log(id)
                console.log(res)
                setUserData(res)
            }
        }
        fetchData()
    }, [id])

    if (!userData) {
        console.log(id)

        console.log(userData)
        return <div className="flex justify-center text-xl">Loading...</div>
    }

    return (
        <div className="flex  justify-center ">
            <div className=" max-w-2xl   ">
                <div className="flex p-1 pt-3 pb-3  text-amber-400 text-xl">
                    {id}
                    <span>'s Profile</span>
                </div>
                <div className="gap-1 p-0.5 text-gray-400">
                    Joined -
                    <span className="text-white">
                        {new Date(userData.created * 1000).toLocaleDateString()}
                    </span>
                </div>
                <div className="gap-1 p-0.5 text-gray-400">
                    Karma-
                    <span className="text-white">{userData.karma}</span>
                </div>
                <div className="flex gap-1 p-0.5 flex-col text-gray-400">
                    About-
                    {userData.about ? (
                        <div className="container text-white break-words">
                            {userData.about}
                        </div>
                    ) : (
                        <div className="text-amber-600">Null</div>
                    )}
                </div>
            </div>
        </div>
    )
}
