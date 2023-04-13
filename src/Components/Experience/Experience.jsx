import React from "react";
import './Experience.css'
import {themeContext} from '../../Contexte'
import { useContext } from "react";

const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return(
        <div className="experience" id="Experience">
            <div className="achievement">
                <div className="circle" style={{color: darkMode? '#FCA61F': ''}}>+1</div>
                <span>years</span>
                <span>Experience</span>
            </div>

            <div className="achievement">
                <div className="circle" style={{color: darkMode? '#FCA61F': ''}}>+8</div>
                <span>completed</span>
                <span>Projects</span>
            </div>

            <div className="achievement">
                <div className="circle" style={{color: darkMode? '#FCA61F': ''}}>+5</div>
                <span>companies</span>
                <span>Work</span>
            </div>

        </div>
    )
}

export default Experience;