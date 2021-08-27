import NavButton from "./NavButton"

export default function CustomNavbar({ openState }) {

    let navClass = "bg-theme-light text-theme-pink inset-y-0 left-0 space-y-5 z-50 w-72 absolute -translate-x-full transform transition duration-200 ease-in-out md:relative md:translate-x-0"

    if (openState) {
        navClass = "bg-theme-light text-theme-pink inset-y-0 left-0 space-y-5 z-50 w-72 absolute transform transition duration-200 ease-in-out md:relative md:translate-x-0"
    }
    else {
        navClass = "bg-theme-light text-theme-pink inset-y-0 left-0 space-y-5 z-50 w-72 absolute -translate-x-full transform transition duration-200 ease-in-out md:relative md:translate-x-0"
    }

    return (
        <div className={navClass}>
            <a href="#home">
                <div className="flex items-center space-x-3 pt-10 px-1 pb-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xl font-bold">Web Dev Portfolio</span>
                </div>
            </a>
            <nav className="text-theme-accent-light px-3">
                <NavButton href="#aboutme" text="About Me" />
                <NavButton href="#projects" text="Projects" />
                <NavButton href="#links" text="Links" />
                <NavButton href="#contactme" text="Contact Me" />
            </nav>
        </div>
    );
}