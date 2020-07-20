import React from 'react';
import style from './PrimaryCTA.module.css'

const PrimaryCTA = (props) => {
    return (
        <button className = {style.PrimaryCTA}>
            {props.text}
        </button>
    )
}


export default PrimaryCTA;