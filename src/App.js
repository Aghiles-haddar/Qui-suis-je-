import React, { useContext } from "react";
import Navbar from "../src/Components/Navbar/Navbar"
import '../src/App.css'
import Intro from '../src/Components/Intro/Intro'
import Services from "./Components/Services/Services"
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Contexte'



function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{background:darkMode? 'black':'',color:darkMode? 'white':'',}}>
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    <Works/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
