import React from 'react'
import ProjectItem from '../ProjectItem/ProjectItem'
import memoryGame from '../../../assets/memory-game.png'
import artGallery from '../../../assets/art-gallery.png'
import conintech from '../../../assets/conintech.png'

import './ProjectItems.css'

const items = [
  {
    src: memoryGame,
    alt: 'Memory game',
    name: 'Memory game',
    description:
      'Memory game made in React with the use of JSX, Javascript and CSS3',
    techs: ['React', 'CSS3', 'Responsive'],
    links: {
      github: 'https://github.com/Wisammozalbat/wamt-memory-game.git',
      demo: 'https://ecstatic-boyd-b2674a.netlify.app/',
    },
  },
  {
    src: artGallery,
    alt: 'Art Gallery',
    name: 'TrendArt',
    description:
      'Art Gallery made in React with the use of JSX, Javascript and CSS3',
    techs: ['React', 'CSS3', 'HTML5'],
    links: {
      github: 'https://github.com/Wisammozalbat/art-gallery.git',
      demo: 'https://wisammozalbat.github.io/art-gallery/',
    },
  },
  {
    src: conintech,
    alt: 'Conintech Home',
    name: 'Conintech',
    description:
      'Lading for Conintech, made in React with the use of JSX, Javascript and CSS3',
    techs: ['React', 'CSS3', 'HTML5'],
    links: {
      github: 'https://github.com/Wisammozalbat/conintech',
      demo: 'https://conintech.net/',
    },
  },
]

const ProjectItems = (props) => {
  return (
    <div className="projects__container">
      <h2 className="heading-1 heading-1--light heading-1-bg--square">
        Projects
      </h2>
      <div className="projects__content">
        {items.map((item, i) => (
          <ProjectItem
            key={i}
            img={item.src}
            alt={item.alt}
            name={item.name}
            description={item.description}
            techs={item.techs}
            links={item.links}
          />
        ))}
      </div>
      <p className="more-soon">More in progress...</p>
    </div>
  )
}

export default ProjectItems
