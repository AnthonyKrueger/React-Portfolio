import React from 'react'
import Header from '../components/Header'

export default function ContactMe() {
    return (
        <div id="contactme" className="my-5 pb-5 container mx-auto">
            <Header text="Contact Me" />
            <form className="flex flex-col mx-5 md:mx-20 my-10 rounded bg-theme-main px-10 py-10">
                <div className="mb-6">
                    <label className="block text-theme-pink text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input className="shadow bg-theme-light appearance-none rounded w-full py-2 px-3 text-theme-orange leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Your Email Here" />
                </div>
                <div className="mb-4">
                    <label className="block text-theme-pink text-sm font-bold mb-2" for="message">
                        Message
                    </label>
                    <textarea className="h-64 shadow bg-theme-light appearance-none rounded w-full py-2 px-3 text-theme-yellow leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Leave me a message!" />
                </div>
                <div className="mx-auto">
                    <button type="submit" className="bg-theme-main transition duration-200 font-semibold text-lg hover:bg-theme-light text-theme-accent-light py-2 px-4 rounded">Send Message</button>
                </div>
            </form>
        </div>
    )
}
