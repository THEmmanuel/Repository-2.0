import React from 'react'
import style from './ContactButton.module.css'

const ConatctButton = (props) => {
    return(
            <button className = {style.ContactButton}>
                {props.ButtonText}
            </button>
        )
}

export default ConatctButton;