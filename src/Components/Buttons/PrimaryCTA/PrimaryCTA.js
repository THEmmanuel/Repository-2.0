import React from 'react';
import style from './PrimaryCTA.module.css'

const PrimaryCTA = (props) => {
    return (
        <a href={props.link}>
            <button className = {style.PrimaryCTA}>
            {props.text}
        </button>
        </a>
    )
}


export default PrimaryCTA;