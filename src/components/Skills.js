import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons'
import {faJsSquare} from '@fortawesome/free-brands-svg-icons'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import {faPython} from '@fortawesome/free-brands-svg-icons'
import {faGitSquare} from '@fortawesome/free-brands-svg-icons'
import {faSass} from '@fortawesome/free-brands-svg-icons'
import {faBootstrap} from '@fortawesome/free-brands-svg-icons'
import {faTerminal} from '@fortawesome/free-solid-svg-icons'


class Skills extends React.Component{
    render(){
        return(
            <div className="skills">
                <div className="skills-text">
                    <h1> Skills</h1>
                    <p>This is my skills showcase</p>
                </div>
                <div className="skill">
                    <div>
                        <p className="skill-text">Html</p>
                        <FontAwesomeIcon icon={faHtml5} className='skill-icon' />
                    </div>
                    <div>
                        <p className="skill-text">Css</p>
                        <FontAwesomeIcon icon={faCss3Alt} className='skill-icon' />
                    </div>
                    <div>
                        <p className="skill-text">Javascript</p>
                        <FontAwesomeIcon icon={faJsSquare} className='skill-icon' />
                    </div>
                    <div>
                        <p className="skill-text">ReactJs</p>
                        <FontAwesomeIcon icon={faReact} className='skill-icon' />
                    </div>
                    <div>
                        <p className="skill-text">Python</p>
                        <FontAwesomeIcon icon={faPython} className='skill-icon' />
                    </div>
                    <div>
                        <p className="skill-text">Sass</p>
                        <FontAwesomeIcon icon={faSass} className='skill-icon' />
                    </div>
                    <div>
                        <p className="skill-text">Bootstrap</p>
                        <FontAwesomeIcon icon={faBootstrap} className='skill-icon' />
                    </div>
                    <div>
                        <p className="skill-text">Git</p>
                        <FontAwesomeIcon icon={faGitSquare} className='skill-icon' />
                    </div>
                    <div>
                        <p className="skill-text">Terminal</p>
                        <FontAwesomeIcon icon={faTerminal} className='skill-icon' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills