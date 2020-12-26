import React from 'react';
import './ProjectItem.css'

const ProjectItem = props => {

    return (
        <div className="project-item__container">
            <div className="project-item__card">
                <div className="project-item__card-face project-item__card-face--front">
                    {props.img ? <img className="project-item__image" src={props.img} alt={props.alt} /> : null}
                    <div class="project-item__name">{props.name}</div>
                </div>
                <div className="project-item__card-face project-item__card-face--back ">back</div>
            </div>
        </div>
    )
}

export default ProjectItem;