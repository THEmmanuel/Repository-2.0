import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer className = {style.Footer}>
            <span className = {style.FooterText}>
                Designed and made with &hearts; by Emmanuel Ayodele
            </span>
        </footer>
    )
}

export default Footer;