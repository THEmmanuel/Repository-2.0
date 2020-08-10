import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer className = {style.Footer}>
            <span className = {style.FooterText}>
                Made with &hearts; by Emmanuel Ayodele
            </span>
        </footer>
    )
}

export default Footer;