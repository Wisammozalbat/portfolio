import React from 'react';
import './ProjectItem.css'
import { AiFillGithub } from "react-icons/ai"
import { BiSlideshow } from "react-icons/bi"

const ProjectItem = props => {

    return (
        <div className="project-item__container">
            <div className="project-item__card hover">
                <div className="project-item__card-face project-item__card-face--front">
                    {props.img ? <img className="project-item__image" src={props.img} alt={props.alt} /> : null}
                    <div className="project-item__name">{props.name}</div>
                </div>
                <div className="project-item__card-face project-item__card-face--back ">
                    <div className="project-item__description">{props.description}</div>
                    <div className="project-item__technologies">
                        {props.techs.map((tech, i) => <div key={i} className="project-item__technology">{tech}</div>)}
                    </div>
                    {props.links.github || props.links.demo ?
                        <div className="project-item__links">
                            {props.links.github !== '' ? 
                                <div className="project-item__link-content">
                                    <AiFillGithub className="link-icon"/>
                                    <a href={props.links.github} target="_blank" rel="noreferrer" className="project-item__link">
                                        Source code
                                    </a> 
                                </div>
                            : null }
                            {props.links.demo !== '' ? <div className="project-item__link"><BiSlideshow className="link-icon" /></div> : null }
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;