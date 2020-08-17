import React from 'react'
import style from './ContactButton.module.css'

const ConatctButton = (props) => {
    return (
        <div className = {style.ContactButtons}>
            <button className={style.ContactButton}>
                {props.ButtonText}
            </button>
        </div>
    )
}

export default ConatctButton;