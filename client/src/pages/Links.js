import React from 'react'
import Header from '../components/Header'

export default function Links() {
    return (
        <div id="links" className="my-5 pb-5 container mx-auto rounded-lg shadow-lg bg-theme-light">
            <Header text="Links" />
            <div className="flex flex-col space-y-5 mx-auto py-5">
                <div className="mx-auto transition duration-200 text-theme-accent-light hover:text-theme-purple">
                    <a className="space-x-2 text-3xl" href="https://github.com/AnthonyKrueger" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                        <span className="font-semibold">GitHub</span>
                    </a>
                </div>
                <div className="mx-auto transition duration-200 text-theme-accent-light hover:text-theme-purple">
                    <a className="space-x-2 text-3xl" href="https://www.linkedin.com/in/anthony-krueger-1545a5208/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                        <span className="font-semibold">LinkedIn</span>
                    </a>
                </div>
                <div className="pt-10 mx-auto transition duration-200 text-theme-pink hover:text-theme-purple">
                    <a className="space-x-2 text-3xl" href="/AK_Resume.pdf" target="_blank" rel="noreferrer" download>
                        <i className="fas fa-file-download"></i>
                        <span className="font-semibold">Download My Resume</span>
                    </a>
                </div>
            </div>
        </div>
    )
}