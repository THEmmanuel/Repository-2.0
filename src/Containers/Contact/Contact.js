import React from 'react';
import style from './Contact.module.css'
import ContactButton from '../../Components/Buttons/ContactButton/ContactButton';

const Contact = (props) => {
    return (
        <section className={style.Contact} id = 'contact'>
            <h2 className={style.SectionTitle}>
                Contact Me.
            </h2>
            <div className={style.ContactContent}>
                <span className={style.ContactText}>
                    Interested in hiring me? I'm sure I'll be a great addition to your team.
                    <p />
                    Or you just want to talk about tech related stuff?
                    Kindly reach out to me!
                    <br />
                    I genuinely look forward to working and sharing ideas with people.
                    Lets talk about your awesome project or ideas.
                </span>

                <div className={style.ContactButtons}>
                    <a href="mailto:emmayodayo@gmail.com">
                        <ContactButton ButtonText='emmayodayo@gmail.com' />
                    </a>

                    <a href="tel:+2348136934963">
                        <ContactButton ButtonText='+2348136934963' />
                    </a>
                    {/* <ContactButton ButtonText = /> */}
                </div>

            </div>
            {/* <img src={ContactAnimation} alt="" className={style.ContactAnimation} /> */}
        </section>
    )
}

export default Contact