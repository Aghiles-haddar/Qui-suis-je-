import React from "react";
import './Navbar.css'
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Navbar = () =>{
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Aghiles</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                        <li style={{cursor:'pointer'}}>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                        <li style={{cursor:'pointer'}}>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true}>
                        <li style={{cursor:'pointer'}}>Experiences</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                        <li style={{cursor:'pointer'}}>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true}>
                        <li style={{cursor:'pointer'}}>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to="Contact" smooth={true}>
                    <button className="button n-button"> 
                        Contact
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;