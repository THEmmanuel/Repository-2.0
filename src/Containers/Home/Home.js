import React from 'react';
import style from './Home.module.css';
import PrimaryCTA from '../../Components/Buttons/PrimaryCTA/PrimaryCTA';
import SecondaryCTA from '../../Components/Buttons/SecondaryCTA/SecondaryCTA';
import SocialLink from '../../Components/Buttons/SocialButton/SocialLink';
import { Link, animateScroll as scroll } from 'react-scroll';


const Home = (props) => {
    return (
        <section className={style.Home} id='home'>
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
                        I'm a creative and design-oriented Frontend/UI developer currently based in Nigeria. I believe in making web experiences that look amazing without compromising on functionality, usability and accessibility.
                    </article>

                </div>
                <img src="" />

                <div className={style.SocialLinks}>
                    <SocialLink icon='https://img.icons8.com/ios/28/DF3E02/github-2.png' />
                    <SocialLink icon='https://img.icons8.com/ios/28/DF3E02/linkedin.png' />
                    <SocialLink icon='https://img.icons8.com/ios/28/DF3E02/medium.png' />
                    <SocialLink icon='https://img.icons8.com/ios/28/DF3E02/twitter.png' />
                </div>

                <div className={style.Buttons}>
                    <Link to='portfolio' smooth='true'>
                        <PrimaryCTA text='My Work' />
                    </Link>

                    <Link to='contact' smooth='true'>
                        <SecondaryCTA text='Contact Me' />
                    </Link>
                </div>
            </section>
        </section>
    )
}

export default Home;