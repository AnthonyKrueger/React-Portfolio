import logo from './logo.svg';
import './App.css';
import "@material-tailwind/react/tailwind.css";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CustomNavbar from "./components/Navbar"


function App() {
  return (
    <Router>
      <CustomNavbar />
    </Router>
  );
}

export default App;
