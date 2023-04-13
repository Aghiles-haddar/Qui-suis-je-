import React from "react";
import './Works.css'
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import {themeContext} from '../../Contexte'
import { useContext } from "react";
import { motion } from "framer-motion";





const Works = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="works">
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Works for All these</span>
                <span>Brands & Clients</span>
                <span>
                    je sais vraiment pas quoi faire ou plutot quoi ecrire moi je sais que ecrire en vrai de vrai parce que c'est la vie d'artiste
                    <br />
                    la aussi je sais pas ecrire aussi 
                    <br /> 
                    mais bon c'est la vie aussi 
                    <br /> 
                    parce que je sais pas quoi dire ne vrai  
                </span>
                <a href="">
                    <button className="button s-button"> 
                        Hire me   
                    </button>
                </a>
                
                <div className="blur s-blur1" style={{ background: '#abf1ff94'}} style={{color: darkMode? '#FCA61F': ''}}></div>
            </div>

            {/* right side */}

            <div className="w-right">
                <motion.div
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-20px'}}
                transition={{duration:3.5, type: 'spring'}}
                className="w-mainCircle">

                    <div className="w-seeCircle">
                        <img src={Upwork} alt="" />
                    </div>

                    <div className="w-seeCircle">
                        <img src={Fiverr} alt="" />
                    </div>

                    <div className="w-seeCircle">
                        <img src={Amazon} alt="" />
                    </div>{""}

                    <div className="w-seeCircle" >
                        <img src={Shopify} alt="" />
                    </div>

                    <div className="w-seeCircle">
                        <img src={Facebook} alt="" />
                    </div>

                </motion.div>

                {/* backgrounds Circles */}
                <div className="w-backCircle blueCircle" ></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>

        </div>
    )
}

export default Works;