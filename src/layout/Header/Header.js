import React, { useEffect, useState } from 'react';
import './Header.css';

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { SiUpwork } from "react-icons/si"

import {ReactComponent as AppLogo} from '../../assets/logo-wm.svg';

const defaultClasses = {
    about: ['nav__item'],
    technologies: ['nav__item'],
    projects: ['nav__item'],
    contact: ['nav__item']
}

const Header = props => {

    const [classes, setClasses] = useState({
        about: ['nav__item'],
        technologies: ['nav__item'],
        projects: ['nav__item'],
        contact: ['nav__item']
    });

    useEffect(() => {
        let newStyleClasses = {...defaultClasses}
        for (let item in newStyleClasses) {
            if (item === props.activeLink) {
                newStyleClasses[item] = ['nav__item', 'active']
            } else {
                newStyleClasses[item] = ['nav__item']
            }
        }
        setClasses({...newStyleClasses})
    }, [props.activeLink])

    const toggleActive = (activeItem) => {
        let newStyleClasses = {...classes}
            for (let item in newStyleClasses) {
                if (item === activeItem) {
                    newStyleClasses[item] = ['nav__item', 'active']
                } else {
                    newStyleClasses[item] = ['nav__item']
                }
            }
            setClasses({...newStyleClasses})
    }

    return (
        <div className="header__container">
            <div className="header__content">
                <AppLogo className="header__logo"/>

                <ul className="nav">
                    <li className={[classes.about.join(" ")]} onClick={() => toggleActive("about")}>
                        <a href="#about" className="nav__link">About Me</a></li>
                    <li className={[classes.technologies.join(" ")]} onClick={() => toggleActive("technologies")}><a href="#technologies" className="nav__link">Technologies</a></li>
                    <li className={[classes.projects.join(" ")]} onClick={() => toggleActive("projects")}><a href="#projects" className="nav__link">Projects</a></li>
                    <li className={[classes.contact.join(" ")]} onClick={() => toggleActive("contact")}><a href="#contact" className="nav__link">Contact Me</a></li>
                </ul>

                <div className="social-media">
                    <a href="https://github.com/Wisammozalbat" target="_blank" rel="noreferrer">
                        <AiFillGithub className="social-media__icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/wisam-mozalbat/" target="_blank" rel="noreferrer">
                        <AiFillLinkedin className="social-media__icon"/>
                    </a>
                    <a href="https://www.upwork.com/o/profiles/users/~01904da89701faa749/" target="_blank" rel="noreferrer">
                        <SiUpwork className="social-media__icon"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;