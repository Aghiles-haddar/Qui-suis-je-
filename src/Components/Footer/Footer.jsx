import React from "react";
import './Footer.css'
import Wave from '../../img/footer1.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

const Footer = () =>{
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{width: '100%'}} />
            <div className="f-content">
                <span>a_haddar@hetic.eu</span>
                <div className="f-icons">
                    <Insta color='#fbe201' size='3rem'/>
                    <Facebook color='#fbe201' size='3rem'/>
                    <Github color='#fbe201' size='3rem'/>
                </div>
            </div>
        </div>
    )
}

export default Footer;