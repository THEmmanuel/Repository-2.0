import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className = {style.Footer}>
            <span className = {style.FooterText}>
                Made with &hearts; by Emmanuel Ayodele
            </span>
        </div>
    )
}

export default Footer;