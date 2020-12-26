import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem'
import memoryGame from '../../../img/memory-game.png'

import './ProjectItems.css'

const items = [
    {src: memoryGame, alt: 'Memory game', name: 'Memory game', description: 'Memory game made in React with the use of CSS3', 
    techs: ['React', 'CSS3', 'Responsive'], links:{github: 'https://github.com/Wisammozalbat/wamt-memory-game.git', demo: ''}}
]

const ProjectItems = props => {
    return (
        <div className="projects__container">
            <h2 className="heading-1 heading-1--light heading-1-bg--square">Projects</h2>
            <div className="projects__content">
                {items.map((item, i) => <ProjectItem key={i} img={item.src} alt={item.alt} name={item.name} description={item.description} 
                                                    techs={item.techs} links={item.links}/>)}
            </div>
        </div>
    );
}

export default ProjectItems;