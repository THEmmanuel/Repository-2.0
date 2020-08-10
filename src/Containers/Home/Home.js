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
        <div className={style.Home}>
            {/* <NavBar /> */}
            <div className={style.Introduction}>
                <div>

                    <span className={style.NamePre}>
                        Hi there, I'm
                </span>

                    <span className={style.Name}>
                        Emmanuel.
                </span>

                    <span className={style.ShortDescription}>
                        I craft amazing web experiences.
                </span>

                    <span className={style.LongDescription}>
                        I'm a creative and design-oriented Frontend/UI developer. I believe in making web experiences that look amazing without compromising on functionality, usability and accessibility.
                </span>

                </div>

                <div className={style.Buttons}>
                    <PrimaryCTA text='My Work' link = 'stuff'/>
                    <SecondaryCTA text='Contact Me' />
                </div>
            </div>

            {/* <span className={style.TextBackground} >Emmanuel</span> */}
            {/* <img src={HomeAnimation} alt="" className={style.HomeAnimation} /> */}
        </div>
    )
}

export default Home;