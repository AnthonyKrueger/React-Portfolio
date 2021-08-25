import Project from "../components/Project"
import Header from "../components/Header"

export default function Projects() {
    return (
        <div className="min-h-screen my-5 container mx-auto rounded shadow-sm bg-theme-light">
        <div id="projects">
                <Header text="Projects" />
                <div className=" my-3 mx-3 gap-3 grid grid-cols-1 md:grid-cols-2">
                    <Project />
                    <Project />
                </div>
        </div>
      </div>
    )
}