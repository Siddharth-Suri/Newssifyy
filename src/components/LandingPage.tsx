import { useState } from "react"
import { HomePage } from "./HomePage"
import { PaginationComponent } from "./PaginationComponent"

export const LandingPage = () => {
    const [isLoading, setLoading] = useState(true)

    return (
        <div className="bg-black">
            <div className="flex justify-center">
                <HomePage loading={isLoading} setLoading={setLoading} />
            </div>
            <div className="flex justify-center">
                <PaginationComponent />
            </div>
        </div>
    )
}
