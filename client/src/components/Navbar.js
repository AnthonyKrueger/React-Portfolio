import React, { useState } from "react";

import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Button from "./Button";
import Icon from '@material-ui/core/Icon';
import Drawer from "@material-ui/core/Drawer";

import { Link } from "react-scroll";

export default function CustomNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <div className="relative">
            <div className="z-0 absolute top-3 left-3 w-full cursor-pointer text-theme-light">
                <svg onClick={() => setOpenNavbar(true)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            </div>
            <div className="bg-theme-light text-theme-pink relative space-y-5 z-10 w-72 min-h-screen">
                <a href="#home">
                    <div className="flex items-center space-x-3 pt-10 pl-1 pb-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span className="text-2xl font-bold">Anthony Krueger</span>
                    </div>
                </a>
                <nav className="text-theme-accent-light px-3">
                    <a href="#aboutme">
                        <div className="rounded block py-4 px-4 hover:bg-theme-purple">
                            About Me
                        </div>
                    </a>
                    <a href="#projects">
                        <div className="rounded block py-4 px-4 hover:bg-theme-purple">
                            Projects
                        </div>
                    </a>
                    <a href="#skills">
                        <div className="rounded block py-4 px-4 hover:bg-theme-purple">
                            Skills
                        </div>
                    </a>
                </nav>
            </div>
        </div>
    );
}