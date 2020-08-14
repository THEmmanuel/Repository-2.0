import React from 'react';
import style from './SocialButton.module.css'

const SocialButton = (props) =>
    <a href = {props.link}>
        <button>
            <icon src={props.icon} alt="" className = {style.SocialIcon}/>
        </button>
    </a>

export default SocialButton;