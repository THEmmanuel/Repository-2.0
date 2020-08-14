import React from 'react';
import style from './SocialLink.module.css'

const SocialLink = (props) =>
    <a href = {props.link} className = {style.SocialLink}>
            <img src={props.icon} alt="" className = {style.SocialIcon}/>
    </a>

export default SocialLink;