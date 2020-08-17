import React from 'react';
import style from './Home.module.css';
import HomePrimaryCTA from '../../Components/Buttons/HomePrimaryCTA/HomePrimaryCTA';
import HomeSecondaryCTA from '../../Components/Buttons/HomeSecondaryCTA/HomeSecondaryCTA';
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

                <div className={style.SocialLinks}>
                    <SocialLink icon='https://img.icons8.com/ios/28/DF3E02/github-2.png' link='https://github.com/themmanuel' />
                    <SocialLink icon='https://img.icons8.com/ios/28/DF3E02/linkedin.png' link='https://www.linkedin.com/in/emmanuel-ayodele-412aa11b3/' />
                    <SocialLink icon='https://img.icons8.com/ios/28/DF3E02/medium.png' link='https://medium.com/@emmanuelayodele' />
                    <SocialLink icon='https://img.icons8.com/ios/28/DF3E02/twitter.png' link = 'https://twitter.com/leunamme_dev'/>
                </div>

                <div className={style.Buttons}>
                    <Link to='portfolio' smooth='true'>
                        <HomePrimaryCTA text='My Work' />
                    </Link>

                    <Link to='contact' smooth='true'>
                        <HomeSecondaryCTA text='Contact Me' />
                    </Link>
                </div>
            </section>
        </section>
    )
}

export default Home;