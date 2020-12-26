import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem'
import memoryGame from '../../../img/memory-game.png'

import './ProjectItems.css'

const ProjectItems = props => {
    return (
        <div className="projects__container">
            <p>Project items</p>
            <div class="projects__content">
                <ProjectItem img={memoryGame} alt="Memory Game" name="Memory Game" />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </div>
    );
}

export default ProjectItems;