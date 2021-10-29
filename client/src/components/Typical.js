import Typical from 'react-typical'
import { useState, useEffect } from "react"

export default function TypicalWelcome() {
    const [animated, setAnimated] = useState(false)
    useEffect(() => setAnimated(true), [])
    return (
        <div id="home" className="text-xl flex flex-col mb-72 space-y-10 pt-10 min-h-128 text-theme-accent">
            <div className={`${animated ? '' : 'translate-y-10 opacity-0'} transform transition duration-1000 ease-in-out`}>
                <span className="text-3xl font-bold text-theme-pink">Anthony Krueger</span>
            </div>
            <div className={`${animated ? '' : 'translate-y-10 opacity-0'} transform transition duration-1000 ease-in-out`}>
                <Typical
                    className="font-mono"
                    steps={['"Full Stack Web Developer"', 2000, '"Front End Designer"', 2000, '"Database/API Developer"', 2000, '"All Around Cool Dude"', 2000]}
                    loop={Infinity}
                    wrapper="span"
                />
            </div>
        </div>

    )
}