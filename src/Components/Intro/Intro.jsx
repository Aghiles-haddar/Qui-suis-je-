import React from "react";
import './Intro.css'
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import Linkedin from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/spacepdp1.png'
import Thumbup from '../../img/astronaut.png'
import Crown from '../../img/expedition.png'
import glassesimo from '../../img/moonintro.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {themeContext} from '../../Contexte'
import { useContext } from "react";
import {motion} from 'framer-motion'

const Intro = () =>{

    const transition = {duration : 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white': ''}}>Hy! I Am</span>
                    <span>Aghiles Haddar</span>
                    <span>My web development portfolio is a journey through <span class="space-style">space</span>, where each line of code is a step towards infinity, inspired by the audacity of astronauts who have explored the unknown</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="">
                        <img src={Github} alt="Github" />
                    </a>
                    <a href="">
                        <img src={Linkedin} alt="Linkedin" />
                    </a>
                    <a href="">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </div>
            </div>

            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img className="space" src={Boy} alt="" />
                <motion.img className="explorer" 
                initial={{left:'-36%'}}
                whileInView= {{left :'-24px'}}
                transition={transition}
                src={glassesimo} alt="" />
                <motion.div 
                initial={{top: '-4%',left:'74%'}}
                whileInView={{left:'68%'}}
                transition={transition}
                style={{top: '-4%', left:'68%'}}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
                </motion.div>
                <motion.div
                initial={{left: '9rem',top:'18rem'}}
                whileInView={{left:'0rem'}}
                transition={transition}
                 style={{top: '18rem', left:'0rem'}}>
                    <FloatingDiv image={Thumbup} txt1='Best Design' txt2='Award'/>
                </motion.div>
                {/* La partie floue */}
                <div className="blur" style={{ background: 'rgb(238 210 255)'}}></div>
                <div className="blur" style={{ background: '#c1f5ff',top: '17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
                
            </div>
        </div>  

    )
}

export default Intro;
