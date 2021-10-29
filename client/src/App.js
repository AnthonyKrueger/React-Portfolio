
import "@material-tailwind/react/tailwind.css";
import "./flickity.css"
import './index.css';

import React from "react";

import Projects from "./pages/Projects"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import ContactMe from "./pages/ContactMe"
import Links from "./pages/Links"
import Skills from "./pages/Skills"

import CustomNavbar from "./components/Navbar"
import MobileNav from "./components/MobileNav"


function App() {
  const [openNavbar, setOpenNavbar] = React.useState(false);
  return (
    <div id="main" className="h-screen flex bg-theme-main overflow-hidden">
      <MobileNav openState={openNavbar} toggleFunction={setOpenNavbar}/>
      <CustomNavbar openState={openNavbar}/>
      <div onClick={() => setOpenNavbar(false)} id="content" className="flex flex-col py-5 md:mx-7 space-y-20 w-full overflow-y-auto mt-5 md:mt-0">
          <Home />
          <AboutMe />
          <Projects />
          <Skills />
          <Links />
          <ContactMe />
      </div>
    </div>
  );
}

export default App;
