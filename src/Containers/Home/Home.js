import React from 'react';
import style from './Home.module.css';
// import NavBar from '.././NavBar/NavBar'
import PrimaryCTA from '../../Components/Buttons/PrimaryCTA/PrimaryCTA';
import SecondaryCTA from '../../Components/Buttons/SecondaryCTA/SecondaryCTA';
// import Portfolio from '../Portfolio/Portfolio';

import HomeAnimation from '../../Assets/SVG/Asset 10.svg'

const Home = (props) => {

    // const Words = ['amazing', 'awesome', 'stunning', 'beautiful', 'great', 'intuitive']
    
    // const WordSelectHandler = () => {

    // }
    

    return (
        <section className={style.Home}>
            {/* <NavBar /> */}
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

                <div className={style.Buttons}>
                    <PrimaryCTA text='My Work' link = 'stuff'/>
                    <SecondaryCTA text='Contact Me' />
                </div>
            </section>

            {/* <span className={style.TextBackground} >Emmanuel</span> */}
            {/* <img src={HomeAnimation} alt="" className={style.HomeAnimation} /> */}
        </section>
    )
}

export default Home;