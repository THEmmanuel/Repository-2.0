import React from 'react';
import style from './Contact.module.css'
import ContactButton from '../../Components/Buttons/ContactButton/ContactButton';

const Contact = (props) => {
    return (
        <section className={style.Contact}>
            <div className = {style.ContactContent}>
                <span className={style.ContactText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere repellat sint possimus cum iure illo aspernatur atque eos ipsam odio repudiandae inventore, eius aperiam esse blanditiis consectetur, ex dignissimos.
                </span>

                <div className={style.ContactButtons}>
                    <ContactButton />
                    <ContactButton />
                    <ContactButton />
                </div>

            </div>
        </section>
    )
}

export default Contact