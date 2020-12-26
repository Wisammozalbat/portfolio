import React from 'react';
import './About.css'

const About = props => {
    return (
        <div className="about__container">
            <div className="about__name">Hi, I'm Wisam Mozalbat</div>
            <div className="about__text"><span style={{animation: props.isVisible ? 'bgMove 35s linear infinite' : 'none'}}>I'm a Front-End developer passionate about my work and always looking to improve my skills and find new challenges</span></div>
            <div className="about__resume">Check my resume here</div>
        </div>
    )
}

export default About;