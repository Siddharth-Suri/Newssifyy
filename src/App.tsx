import { RecoilRoot } from "recoil"
import { LandingPage } from "./components/LandingPage"
import { Route, Routes } from "react-router-dom"
import { TopBar } from "./components/TopBar"
import { UserInterface } from "./components/UserInterface"
import { CommentComponent } from "./components/CommentComponent"
function App() {
    return (
        <RecoilRoot>
            <TopBar />
            <Routes>
                <Route path="/" element={<LandingPage></LandingPage>}></Route>
                <Route
                    path="/user/:id"
                    element={<UserInterface></UserInterface>}
                ></Route>
                <Route
                    path="/story/:id"
                    element={<CommentComponent></CommentComponent>}
                ></Route>
            </Routes>
        </RecoilRoot>
    )
}

export default App
