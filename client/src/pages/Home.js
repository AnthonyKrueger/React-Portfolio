import Project from "../components/Project"
import Header from "../components/Header"

export default function Home() {
    return (
        <div className="min-h-screen my-5 container mx-auto rounded shadow-sm bg-theme-light">
        <div id="home">
                <Header text="Welcome!" />
        </div>
      </div>
    )
}