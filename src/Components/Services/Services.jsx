import React from "react";
import './Services.css'
import Card from "../Card/Card";

import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png' ;
import Humble from '../../img/humble.png' ;


const Services = () => {
    return (
        <div className="services">

            {/* left side */}
            <div className="awesome">
                <span>My awesome</span>
                <span>Services</span>
                <span>
                    je sais vraiment pas quoi faire ou plutot quoi ecrire moi je sais que ecrire en vrai de vrai parce que c'est la vie d'artiste
                    <br />
                    la aussi je sais pas ecrire aussi mais bon c'est la vie aussi 
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
                <div style={{left: '14rem'}}>
                    <Card
                        emoji = {HeartEmoji}
                        heading = {"Design"}
                        detail = {"Figma, Sketch, Photoshop, Adobe xd, Adobe"}
                    />
                </div>

                {/* the second card */}
                <div style={{left: '-4rem', top:'12rem'}}>
                    <Card
                        emoji = {Glasses}
                        heading = {"Developer"}
                        detail = {"Html5, CSS3, JavaScripts, React"}
                    />
                </div>

                {/* The third card */}
                <div style={{left: '12rem', top:'19rem'}}>
                    <Card
                        emoji = {Humble}
                        heading = {"UI/UX"}
                        detail = {"parce que je suis le plus fort niveau design et oui"}
                    />
                </div>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
                <div className="blur s-blur1" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Services; 

