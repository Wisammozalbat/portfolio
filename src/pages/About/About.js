import React from 'react'
import './About.css'

import { FaRegEye } from 'react-icons/fa'

const About = (props) => {
  return (
    <div className="about__container">
      <div className="about__name heading-1 heading-1--light">
        Wisam Mozalbat
      </div>
      <div className="about__text">
        <span
          style={{
            animation: props.isVisible ? 'bgMove 65s linear infinite' : 'none',
          }}
        >
          I'm a Computer Engineer focused on Front-End development. I'm
          passionate about my work and I'm always looking to improve my skills
          and find new challenges.
        </span>
      </div>
      <div className="about__resume">
        <FaRegEye className="resume-icon" />
        <a
          className="about__resume-link link"
          href="https://drive.google.com/file/d/10BNXZ4eGmx9PvHzJMZBRR3sQVI6d4H-X/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  )
}

export default About
