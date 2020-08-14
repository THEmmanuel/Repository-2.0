import React from 'react';
import style from './SocialLink.module.css'

const SocialLink = (props) =>
    <a href = {props.link} className = {style.SocialButton}>
            <icon src={props.icon} alt="" className = {style.SocialIcon}/>
    </a>

export default SocialLink;