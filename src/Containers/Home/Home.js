import React from 'react';
import style from './Home.module.css';
import PrimaryCTA from '../../Components/Buttons/PrimaryCTA/PrimaryCTA';
import SecondaryCTA from '../../Components/Buttons/SecondaryCTA/SecondaryCTA';
import SocialLink from '../../Components/Buttons/SocialButton/SocialLink';

const Home = (props) => {
    return (
        <section className={style.Home}>
            <section className={style.Introduction}>
                <div>

                    <article className={style.NamePre}>
                        Hi there, I'm
                </article>

                    <article className={style.Name}>
                        Emmanuel.
                </article>

                    <article className={style.ShortDescription}>
                        I craft amazing web experiences.
                </article>

                    <article className={style.LongDescription}>
                        I'm a creative and design-oriented Frontend/UI developer currently based in Ngeria. I believe in making web experiences that look amazing without compromising on functionality, usability and accessibility.
                    </article>

                </div>

                <div className = {style.SocialLinks}>
                    <SocialLink/>
                    <SocialLink/>
                    <SocialLink/>
                    <SocialLink/>
                </div>

                <div className={style.Buttons}>
                    <PrimaryCTA text='My Work' link = 'stuff'/>
                    <SecondaryCTA text='Contact Me' />
                </div>
            </section>
        </section>
    )
}

export default Home;