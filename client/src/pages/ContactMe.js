import React from 'react'
import Header from '../components/Header'
import { useState } from 'react'
import axios from 'axios'
import Alert from '../components/Alert'

export default function ContactMe() {

    const [message, setMessage] = useState({email: "", message: ""})
    const [alert, setAlert] = useState({show: false, message:null, color:"bg-theme-accent-light"})

    function hideAlert() {
        setAlert({...alert, show: false})
    }

    function handleChange(field, value) {
        setMessage({...message, [field]: value})
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await axios.post("/api/mail", {
            email: message.email,
            message: message.message
        })
        .catch(function (error) {
            if(error.response) {
                console.log(error.response)
                setAlert({show: true, message: error.response.data.message, color:"bg-theme-orange"})
            }
            else if(error.request) {
                console.log(error.request);
                setAlert({show: true, message: error.request, color:"bg-theme-orange"})
            }
            else {
                console.log("error:", error.message)
                setAlert({show: true, message: error.message, color:"bg-theme-orange"})
            }
        })
        if(response) {
            setMessage({message: "", email: ""})
            setAlert({show: true, message: "Email Sent!", color:"bg-theme-accent-light"})
        }
    }

    return (
        <div id="contactme" className="my-5 pb-5 container mx-auto">
            <Header text="Contact Me" />
            <form onSubmit={(event) => handleSubmit(event)} className="flex flex-col mx-5 md:mx-20 my-10 rounded bg-theme-main px-10 py-10">
                <div className="mb-6">
                    <label className="block text-theme-pink text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input required value={message.email} type="email" onChange={(event) => handleChange('email', event.target.value)} className="shadow bg-theme-light appearance-none rounded w-full py-2 px-3 text-theme-orange leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Your Email Here" />
                </div>
                <div className="mb-4">
                    <label className="block text-theme-pink text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea required value={message.message} onChange={(event) => handleChange('message', event.target.value)} className="h-64 shadow bg-theme-light appearance-none rounded w-full py-2 px-3 text-theme-yellow leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Leave me a message!" />
                </div>
                <div className="mx-auto">
                    <button type="submit4" className="bg-theme-main transition duration-200 font-semibold text-lg hover:bg-theme-light text-theme-accent-light py-2 px-4 rounded">Send Message</button>
                </div>
            </form>
            <div className="w-full">
                    {alert.show ? <Alert message={alert.message} color={alert.color} hideFunction={hideAlert}/> : null}
            </div>
        </div>
    )
}
