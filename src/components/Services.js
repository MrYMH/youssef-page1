import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import {faMobileScreenButton} from '@fortawesome/free-solid-svg-icons'
import {faPenRuler} from '@fortawesome/free-solid-svg-icons'
import {faUniversalAccess} from '@fortawesome/free-solid-svg-icons'


class Services extends React.Component{
    render(){
        return(
            <div className="services">
                <h1> Services</h1>
                <div className="cards">
                    <div className="service">
                        <FontAwesomeIcon icon={faLaptopCode} className='service-icon' />
                        <h3> Web Development</h3>
                        <p>Development of professional websites, web systems, blogs and online stores.</p>
                    </div>
                    <div className="service">
                        <FontAwesomeIcon icon={faMobileScreenButton} className='service-icon' />
                        <h3> Web Development</h3>
                        <p>Development of professional websites, web systems, blogs and online stores.</p>
                    </div>
                    <div className="service">
                        <FontAwesomeIcon icon={faPenRuler} className='service-icon' />
                        <h3> Web Development</h3>
                        <p>Development of professional websites, web systems, blogs and online stores.</p>
                    </div>
                    <div className="service">
                        <FontAwesomeIcon icon={faUniversalAccess} className='service-icon' />
                        <h3> Web Development</h3>
                        <p>Development of professional websites, web systems, blogs and online stores.</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Services