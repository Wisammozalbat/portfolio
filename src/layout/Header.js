import React, { useEffect, useState } from 'react';
import './Header.css';

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { SiUpwork } from "react-icons/si"

const defaultClasses = {
    about: ['nav__item'],
    skills: ['nav__item'],
    projects: ['nav__item'],
    contact: ['nav__item']
}

const Header = props => {

    const [classes, setClasses] = useState({
        about: ['nav__item'],
        skills: ['nav__item'],
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
                <div className="header__logo">LOGO</div>

                <ul className="nav">
                    <li className={[classes.about.join(" ")]} onClick={() => toggleActive("about")}>
                        <a href="#about" className="nav__link">About Me</a></li>
                    <li className={[classes.skills.join(" ")]} onClick={() => toggleActive("skills")}><a href="#skills" className="nav__link">Skills</a></li>
                    <li className={[classes.projects.join(" ")]} onClick={() => toggleActive("projects")}><a href="#projects" className="nav__link">Projects</a></li>
                    <li className={[classes.contact.join(" ")]} onClick={() => toggleActive("contact")}><a href="#contact" className="nav__link">Contact Me</a></li>
                </ul>

                <div className="social-media">
                    <a href="/#">
                        <AiFillGithub className="social-media__icon" />
                    </a>
                    <a href="/#">
                        <AiFillLinkedin className="social-media__icon"/>
                    </a>
                    <a href="/#">
                        <SiUpwork className="social-media__icon"/>
                    </a>
                </div>

                <div className="copyright">&copy; Copyright 2020 by Wisam Mozalbat</div>
            </div>
        </div>
    )
}

export default Header;