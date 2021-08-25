
import "@material-tailwind/react/tailwind.css";
import "./flickity.css"
import './index.css';

import React from "react";

import Projects from "./pages/Projects"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import CustomNavbar from "./components/Navbar"


function App() {
  return (
    <div id="main" className="h-screen flex bg-theme-main overflow-hidden">
      <CustomNavbar />
      <div id="content" className="flex flex-col py-5 mx-7 space-y-20 w-full overflow-y-auto">
          <Home />
          <AboutMe />
          <Projects />
      </div>
    </div>
  );
}

export default App;
