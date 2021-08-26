import Header from "../components/Header"
import ProjectTabs from "../components/Tabs"

export default function Projects() {
    return (
        <div className="my-5 container mx-auto rounded-lg shadow-lg bg-theme-light">
        <div id="projects">
        <Header text="Projects" />
                <ProjectTabs />
        </div>
      </div>
    )
}