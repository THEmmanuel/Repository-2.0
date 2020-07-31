import React from 'react';
import style from './Contact.module.css'
import ContactButton from '../../Components/Buttons/ContactButton/ContactButton';
import ContactAnimation from '../../Assets/SVG/Asset 10.svg'

const Contact = (props) => {
    return (
        <section className={style.Contact}>
            <h2 className={style.SectionTitle}>
                Contact Me.
            </h2>
            <div className={style.ContactContent}>
                <span className={style.ContactText}>
                    Interested in hiring me? I'm sure I'll be a great addition to your team.
                    <p/>
                    Or you just want to talk about tech related stuff?
                    Kindly reach out to me!
                    <br/>
                    I genuinely look forward to working and sharing ideas with people.
                    Lets talk about your awesome project or ideas.
                </span>

                <div className={style.ContactButtons}>
                    <ContactButton />
                    <ContactButton />
                    <ContactButton />
                </div>

            </div>
            <img src={ContactAnimation} alt="" className={style.ContactAnimation} />
        </section>
    )
}

export default Contact