import Carousel from "./Carousel"

export default function Project({images, title, description, techUsed, role, links}) {
    return(
        <div>
            <Carousel images={images}/>
            <h2 className="text-3xl underline pt-5 pb-7 text-theme-pink font-bold">{title}</h2>
            <div className="pl-5 flex flex-col mx-auto space-y-2 bg-theme-main py-3 rounded md:px-10">
                <span className="text-theme-yellow"><strong className="text-theme-accent">Description: </strong>{description}</span>
                <span className="text-theme-yellow"><strong className="text-theme-accent">Role: </strong>{role}</span>
                <span className="text-theme-orange"><strong className="text-theme-accent">Technologies Used: </strong>{techUsed}</span>
            </div>
                <div className="pt-7 flex flex-row space-x-10">
                <a rel='noreferrer' className="text-theme-accent-light font-semibold text-lg hover:text-theme-purple transition duration-200" href={links.deployed} target="_blank">Deployed App</a>
                <a href={links.github} target="_blank" rel='noreferrer'>
                    <i className="text-theme-accent-light hover:text-theme-purple fab fa-github text-3xl transition duration-200"></i>
                </a>
                </div>
        </div>
    )
}