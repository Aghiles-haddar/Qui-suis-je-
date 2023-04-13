import React from "react";
import './Services.css'
import Card from "../Card/Card";

import HeartEmoji from '../../img/explorer.png';
import Glasses from '../../img/universe.png' ;
import Humble from '../../img/colonizations.png' ;
import {themeContext} from '../../Contexte'
import { useContext } from "react";
import {motion} from 'framer-motion'


const Services = () => {
    const transition = {duration : 1.5, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id="Services">

            {/* left side */}
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>My awesome</span>
                <span>Services</span>
                <span className="details">
                    <span className="num">1-</span> 
                    My expertise in web development will transport <br />
                    you into a travel experience in the digital space,<br />
                    with innovative designs and breathtaking features.
                    <br />
                    <br />
                    <span className="num">2-</span> 
                    My UX/UI approach is designed to give your users <br />
                     a feeling of weightlessness, offering them a smooth and<br />
                     intuitive browsing experience through your website.
                    <br />
                    <br />
                    <span className="num">3-</span> 
                    My design skills are inspired by the beauty of space,<br />
                       which allows me to create modern and elegant websites,<br />
                       with a touch of science fiction.
                     <br />
                </span>
                <a href="">
                    <button className="button s-button"> 
                        Download CV   
                    </button>
                </a>
                
                <div className="blur s-blur1" style={{ background: '#abf1ff94'}}></div>
            </div>

            {/* right side */}
            <div className="cards">
                <motion.div
                whileInView={{left:'14rem'}}
                initial={{left:'25rem'}}
                transition={transition}
                style={{left: '14rem'}}>
                    <Card
                        emoji = {HeartEmoji}
                        heading = {"Design"}
                        detail = {"Figma, Sketch, Photoshop, Adobe xd, Adobe"}
                    />
                </motion.div>

                {/* the second card */}
                <motion.div
                whileInView={{left:'-4rem', top:'12rem'}}
                initial={{left:'-15rem'}}
                transition={transition}
                style={{left: '-4rem', top:'12rem'}}>
                    <Card
                        emoji = {Glasses}
                        heading = {"Developer"}
                        detail = {"Html5, CSS3, JavaScripts, React"}
                    />
                </motion.div>

                {/* The third card */}
                <motion.div
                 whileInView={{left:'12rem', top:'19rem'}}
                 initial={{left:'25rem'}}
                 transition={transition}
                 style={{left: '12rem', top:'19rem'}}>
                    <Card
                        emoji = {Humble}
                        heading = {"UI/UX"}
                        detail = {"parce que je suis le plus fort niveau design et oui"}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
                <div className="blur s-blur1" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Services; 

