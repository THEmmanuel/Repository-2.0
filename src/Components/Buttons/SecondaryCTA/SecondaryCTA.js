import React from 'react';
import style from './SecondaryCTA.module.css'


const SecondaryCTA = (props) => {
    return (
        <button style = {style.PrimaryCTA}>
            {props.text}
        </button>
    )
}

export default SecondaryCTA;