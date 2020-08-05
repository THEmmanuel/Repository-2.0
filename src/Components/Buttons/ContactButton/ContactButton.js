import React from 'react'
import style from './ContactButton.module.css'

const ConatctButton = (props) => {
    return (
        <div className = {style.ContactButtons}>
            <button className={style.ContactButton}>
                {/* <img src="" alt=""/> */}
                {props.ButtonText}
            </button>
            <button className={style.CopyButton}>
                copy
                </button>
        </div>
    )
}

export default ConatctButton;