import React from 'react';
import './Technologies.css';

import { AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiJavascript1, DiReact, DiHtml5, DiGit, DiPostgresql } from 'react-icons/di';
import { SiNetlify, SiHeroku } from 'react-icons/si';

const Technologies = props => {
    return (
        <div className="technologies__container">
            <h2 className="heading-1 heading-1--dark heading-1-bg--square-2">Technologies</h2>
            <p className="technologies__subtitle">These are the technologies I have been working with lately</p>
            <div className="technology__list">
                <div className="technology__item"><DiHtml5 className="technology__icon" /> HTML5</div>
                <div className="technology__item"><DiCss3 className="technology__icon" /> CSS3</div>
                <div className="technology__item"><DiJavascript1 className="technology__icon" /> Javascript</div>
                <div className="technology__item"><DiReact className="technology__icon" /> React</div>
            </div>
            <p className="technologies__subtitle">Other</p>
            <div className="technology__list">
                <div className="technology__item"><DiGit className="technology__icon" /> Git</div>
                <div className="technology__item"><AiFillGithub className="technology__icon" /> Github</div>
                <div className="technology__item"><DiPostgresql className="technology__icon" /> Postgresql</div>
                <div className="technology__item"><SiNetlify className="technology__icon" /> Netlify</div>
                <div className="technology__item"><SiHeroku className="technology__icon" /> Heroku</div>
            </div>
        </div>
    )
}

export default Technologies;