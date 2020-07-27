import React from 'react';
import style from './Home.module.css';
import NavBar from '.././NavBar/NavBar'
import PrimaryCTA from '../../Components/Buttons/PrimaryCTA/PrimaryCTA';
import SecondaryCTA from '../../Components/Buttons/SecondaryCTA/SecondaryCTA';

import HomeAnimation from '../../Assets/SVG/Asset 10.svg'

const Home = (props) => {
    return (
        <div className={style.Home}>
                <NavBar/>
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, suscipit accusamus ea eaque eos veniam ipsam quam deserunt laborum quibusdam unde modi optio dolorem ad a adipisci, distinctio est totam!
                </span>

                </div>

                <div className={style.Buttons}>
                    <PrimaryCTA text='My Work' />
                    <SecondaryCTA text='Contact Me' />
                </div>
            </div>
            
            {/* <span className={style.TextBackground} >Emmanuel</span> */}
            <img src={HomeAnimation} alt="" className={style.HomeAnimation} />
        </div>
    )
}

export default Home;