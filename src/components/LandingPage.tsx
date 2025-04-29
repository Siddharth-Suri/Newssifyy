import { HomePage } from "./HomePage"
import { PaginationComponent } from "./PaginationComponent"
import { TopBar } from "./TopBar"

export const LandingPage = () => {
    return (
        <div className="bg-black">
            <div>
                <TopBar></TopBar>
            </div>
            <div className="flex justify-center">
                <div className=" hover:opacity-80">
                    <HomePage></HomePage>
                </div>
            </div>
            <div>
                <PaginationComponent></PaginationComponent>
            </div>
        </div>
    )
}
