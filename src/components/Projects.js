import React from "react";
import commerce from '../photo/desktop-preview.jpg'
import cards from '../photo/four-cards.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLink} from '@fortawesome/free-solid-svg-icons'

function Projects(){
    return(
        <div className="projects">
            <h1>projects </h1>
            <div className="carts">
                
                <div className="project">
                    <h2 className="project-name">E-commerce page </h2>
                    <img src={commerce} alt="" />
                    <div className="links">
                        <div className="link link-live">
                            <a href="https://mrymh.github.io/E-commerce/" >
                                <FontAwesomeIcon icon={faLink} />
                                <p>Website</p>
                            </a>
                        </div>
                        <div className="link link-github">
                            <a href="https://github.com/MrYMH/E-commerce">
                                <FontAwesomeIcon icon={faGithub} className='icon' />
                                <p>Github</p>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="project">
                    <h2 className="project-name">Four-Cards Page </h2>
                    <img src={cards} alt="" />
                    <div className="links">
                        <div className="link link-live">
                            <a href="https://mrymh.github.io/front-end-mentor-four-cards/" >
                                <FontAwesomeIcon icon={faLink} />
                                <p>Website</p>
                            </a>
                        </div>
                        <div className="link link-github">
                            <a href="https://github.com/MrYMH/front-end-mentor-four-cards">
                                <FontAwesomeIcon icon={faGithub} className='icon' />
                                <p>Github</p>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="project">
                    <h2 className="project-name">E-commerce page </h2>
                    <img src={commerce} alt="" />
                    <div className="links">
                        <div className="link link-live">
                            <a href="https://mrymh.github.io/E-commerce/" >
                                <FontAwesomeIcon icon={faLink} />
                                <p>Website</p>
                            </a>
                        </div>
                        <div className="link link-github">
                            <a href="https://github.com/MrYMH/E-commerce">
                                <FontAwesomeIcon icon={faGithub} className='icon' />
                                <p>Github</p>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="project">
                    <h2 className="project-name">E-commerce page </h2>
                    <img src={commerce} alt="" />
                    <div className="links">
                        <div className="link link-live">
                            <a href="https://mrymh.github.io/E-commerce/" >
                                <FontAwesomeIcon icon={faLink} />
                                <p>Website</p>
                            </a>
                        </div>
                        <div className="link link-github">
                            <a href="https://github.com/MrYMH/E-commerce">
                                <FontAwesomeIcon icon={faGithub} className='icon' />
                                <p>Github</p>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="project">
                    <h2 className="project-name">E-commerce page </h2>
                    <img src={commerce} alt="" />
                    <div className="links">
                        <div className="link link-live">
                            <a href="https://mrymh.github.io/E-commerce/" >
                                <FontAwesomeIcon icon={faLink} />
                                <p>Website</p>
                            </a>
                        </div>
                        <div className="link link-github">
                            <a href="https://github.com/MrYMH/E-commerce">
                                <FontAwesomeIcon icon={faGithub} className='icon' />
                                <p>Github</p>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="project">
                    <h2 className="project-name">E-commerce page </h2>
                    <img src={commerce} alt="" />
                    <div className="links">
                        <div className="link link-live">
                            <a href="https://mrymh.github.io/E-commerce/" >
                                <FontAwesomeIcon icon={faLink} />
                                <p>Website</p>
                            </a>
                        </div>
                        <div className="link link-github">
                            <a href="https://github.com/MrYMH/E-commerce">
                                <FontAwesomeIcon icon={faGithub} className='icon' />
                                <p>Github</p>
                            </a>
                        </div>
                    </div>

                </div>
                

            </div>
            <a href="https://github.com/MrYMH?tab=repositories" className="projects-footer"> Repositories on Github</a>
        </div>
    )
}

export default Projects