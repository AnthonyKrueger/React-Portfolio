export default function MobileNav({openState, toggleFunction}) {

    function toggleNav() {
        if(openState) {
            toggleFunction(false)
        }
        else {
            toggleFunction(true)
        }
    }

    let darknessClass = "bg-black absolute opacity-50 z-20 h-screen w-screen"

    if(openState) {
        darknessClass = "bg-black absolute opacity-50 z-20 h-screen w-screen"
    }
    else {
        darknessClass = "bg-black hidden absolute opacity-50 z-20 h-screen w-screen"
    }

    return (
        <div className="bg-theme-light flex justify-between md:hidden fixed z-50 w-screen border-b-2 border-theme-purple">
        <div onClick={() => toggleFunction(false)} className={darknessClass}></div>
            <a href="#home" className="space-x-1 p-4 flex text-theme-pink font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" className=" mt-2h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-base font-bold">Web Dev Portfolio</span>
            </a>
            <button className="text-theme-accent-light mx-5 focus:outline-none" onClick={() => toggleNav()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    )
}