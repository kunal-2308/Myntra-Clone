import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from "./components/Forms";
import About from "./components/About";
function App() {
  let name = "Kunal";
  return (

    
  <>
  <Navbar title="TextUtils" About = "About"></Navbar>
  <div className="container">  <Forms heading = "Enter your text to analyze" inputtxt="KUNAL"></Forms></div>
  <About></About>
  </>
  );
}

export default App;
