import { RecoilRoot } from "recoil"
import { LandingPage } from "./components/LandingPage"

function App() {
    return (
        <RecoilRoot>
            <div>
                <LandingPage></LandingPage>
            </div>
        </RecoilRoot>
    )
}

export default App
