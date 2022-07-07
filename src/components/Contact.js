/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Contact(){
    return(
        <div className="contact">
            <h1> Contact Me</h1>
            <div className="contact-text1">
                <p> you can use these social links to contact me:</p>
                <div className="media">
                    <a href="#" >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="#" >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="#" >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="#" >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>
                <p> or you can call me:</p>
                <a href="+201271317785" className="mobile" >
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <p>+20 12 713 177 85</p>
                </a>
                <p> you can leave me a message here:</p>

            </div>
            <div className="message">
                <form className="message-form">
                    <input type={'username'} name='username' placeholder="Your Name:" className='name' />
                    <input type={'email'} name='Email' placeholder="Your Email:" className="email"/>
                    <input type={'text'} name='Email' placeholder="Write Your Message Here:" className="msg"/>
                    <input type={'submit'} name='Send' className="btn" />
                </form>
            </div>
            <div className="map">
                <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=بنزينة بدوى&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.kokagames.com/fnf-friday-night-funkin-mods/">FNF</a></div>
                
                </div>
            </div>

        </div>
    )
}


export default Contact