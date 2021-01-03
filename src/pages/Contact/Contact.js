import React from 'react';
import './Contact.css';

import { AiOutlineMail } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact__container">
            <h2 className="heading-1 heading-1--dark heading-1-bg--square-2">Contact Me</h2>
            <p className="contact-text">Send me an email and I'll reply as soon as possible</p>
            <div className="contact__item"><AiOutlineMail className="contact__icon"/> <a className="link" href="mailto:wisam_mozalbat@hotmail.com">wisam_mozalbat@hotmail.com</a></div>
            <p className="contact-text">Or text me via Whatsapp</p>
            <div className="contact__item"><FaWhatsapp className="contact__icon"/> <a className="link" target="_blank" rel="noreferrer" href="https://wa.link/16xh65">Whatsapp</a></div>

        </div>
    )
}

export default Contact;