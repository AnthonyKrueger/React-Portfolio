
import './App.css';
import "@material-tailwind/react/tailwind.css";

import React from "react";

import Projects from "./pages/Projects"
import Home from "./pages/Home"
import CustomNavbar from "./components/Navbar"


function App() {
  return (
    <div id="main" className="h-screen flex bg-theme-main overflow-hidden">
      <CustomNavbar />
      <div id="content" className="flex flex-col py-5 space-y-20 w-full overflow-y-auto">
          <Home />
          <Projects />
      </div>
    </div>
  );
}

export default App;
