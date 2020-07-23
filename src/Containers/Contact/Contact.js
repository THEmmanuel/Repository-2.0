import React from 'react';
import style from './Contact.module.css'

const Contact = (props) => {
    return (
        <section className={style.Contact}>
            <div>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere repellat sint possimus cum iure illo aspernatur atque eos ipsam odio repudiandae inventore, eius aperiam esse blanditiis consectetur, ex dignissimos.
                </span>

                <div className = {{style.ContactButtons}}>
                    <button></button>
                    <button></button>
                    <button></button>

                </div>
            
            </div>
        </section>
    )
}

export default Contact