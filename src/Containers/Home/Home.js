import React from 'react';
import style from './Home.module.css';
import PrimaryCTA from '../../Components/Buttons/PrimaryCTA/PrimaryCTA';
import SecondaryCTA from '../../Components/Buttons/SecondaryCTA/SecondaryCTA';



const Home = (props) => {
    return (
        <div>
            <span>
                Hi, there
            </span>
            <PrimaryCTA/>
            <SecondaryCTA/>
        </div>
    )
}

export default Home;