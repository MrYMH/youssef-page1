import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return(
        <div className="footer">
            <div className="foname">
                <p>&copy; 2022 </p>
                <p>Designed by</p>
                <p className="youssef">Youssef Mohamed Hemdan</p>
            </div>
            <div className="my-accounts">
                    <a href="#" >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="#" >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="#" >
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a href="#" >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
            </div>

        </div>
    )
}


export default Footer