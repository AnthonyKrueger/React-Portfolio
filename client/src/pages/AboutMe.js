import Header from "../components/Header"
import profilePhoto from "../images/profilePhoto.JPG"

export default function AboutMe() {
    return (
            <div id="aboutme">
        <div className="my-5 pb-5 container mx-auto rounded-lg shadow-lg bg-theme-light">
                <Header text="About Me" />
                <div className="px-10 md:px-32">
                    <div className="container rounded-lg w-3/4 md:w-3/4 pt-10 flex mx-auto">
                        <img className="rounded border-4 border-theme-purple" src={profilePhoto} alt=""></img>
                    </div>
                    <div className="flex mt-10 mx-auto py-5 px-5 container bg-theme-main rounded">
                        <span className="text-theme-yellow">Hi! As you may have guessed by now, my name is <span className="text-theme-pink">Anthony Krueger</span> and I'm a <span className="text-theme-orange">full stack web developer</span> currently residing in Illinois. I'm a <span className="text-theme-orange">quick learner</span> who specializes in backend work like <span className="text-theme-orange">database and API management</span>, but also greatly enjoy frontend design. I am equipped with a firm understanding of the <span className="text-theme-orange">MERN stack</span> and am learning new technologies every day.</span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5">
                        <div className="flex flex-col mt-10 mx-auto py-5 px-5 container bg-theme-main rounded">
                            <h2 className="text-xl font-semibold text-theme-purple">Passions</h2>
                            <ul className="list-disc text-theme-pink pl-10 text-base md:text-lg md:pl-0 md:mx-auto pt-5">
                                <li>Coding</li>
                                <li>Design</li>
                                <li>Learning New Technologies</li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-10 mx-auto py-5 px-5 container bg-theme-main rounded">
                        <h2 className="text-xl font-semibold text-theme-accent-light">Strengths</h2>
                        <ul className="list-disc text-theme-purple pl-10 text-base md:text-lg md:pl-0 md:mx-auto pt-5">
                                <li>Leadership</li>
                                <li>Problem Solving</li>
                                <li>Teamwork</li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-10 mx-auto py-5 px-5 container bg-theme-main rounded">
                        <h2 className="text-xl font-semibold text-theme-accent">Hobbies</h2>
                        <ul className="list-disc text-theme-accent-light pl-10 text-base md:text-lg md:pl-0 md:mx-auto pt-5">
                                <li>Running Game Servers</li>
                                <li>Skateboarding</li>
                                <li>Spending time with Animals</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}