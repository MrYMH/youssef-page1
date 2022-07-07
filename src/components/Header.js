/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Youssef from '../photo/tumblr_plqykcFI6j1xl2veqo1_500.png';
//import {facebook} from '../photo/facebook-f-brands.svg'

function Header(){
    return(
        <div className="header">
            <div className="header-nav">
                <div className="signature">
                    <h1>youssef</h1>
                </div>
                <div className="links">
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div>
            </div>
            <div className="header-image">
                <img src={Youssef} alt="" />
            </div>
            
            <div className="header-main">
                <div className="header-main-text">
                    <h3>web developer</h3>
                    <h1>Youssef hemdan</h1>
                    <p>There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.</p>
                    
                </div>
                <div className="header-main-buttons">
                    <a href="#"><button className="btn btn-download">download cv</button></a>
                    <a href="#"><button className="btn btn-contact" >contact</button></a>
                </div>
            </div>
            
        </div>
    )
}

export default Header