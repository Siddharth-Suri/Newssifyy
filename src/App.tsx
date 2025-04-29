import "./App.css"
import { NewsComponent } from "./components/NewsComponent"
import { TopBar } from "./components/TopBar"

function App() {
    return (
        <div>
            <TopBar></TopBar>
            <NewsComponent
                title="Breaking News"
                author="John Doe"
                comments={[
                    { author: "Jane", text: "Great!" },
                    { author: "Jane", text: "Great!" },
                ]}
                points={100}
                date={new Date()}
            />
        </div>
    )
}

export default App
