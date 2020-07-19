import React from 'react';
import style from './SecondaryCTA.module.css'


const SecondaryCTA = (props) => {
    return (
        <button className = {style.SecondaryCTA}>
            {props.text}
        </button>
    )
}

export default SecondaryCTA;