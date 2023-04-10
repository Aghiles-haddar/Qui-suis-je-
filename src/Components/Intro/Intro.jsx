import React from "react";
import './Intro.css'
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import Linkedin from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimo from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'


const Intro = () =>{
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Aghiles Haddar</span>
                    <span>Je sais pas quoi mettre en vrai et ça à l'air trés compliqué de le faire car je suis nul de le faire mais vraiment nul car je sais pas enfaite mais</span>
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
                <img src={Boy} alt="" />
                <img src={glassesimo} alt="" />
                <div style={{top: '-4%', left:'68%'}}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
                </div>
                <div style={{top: '18rem', left:'0rem'}}>
                    <FloatingDiv image={Thumbup} txt1='Best Design' txt2='Award'/>
                </div>
                {/* La partie floue */}
                <div className="blur" style={{ background: 'rgb(238 210 255)'}}></div>
                <div className="blur" style={{ background: '#c1f5ff',top: '17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
                
            </div>
        </div>  

    )
}

export default Intro;
