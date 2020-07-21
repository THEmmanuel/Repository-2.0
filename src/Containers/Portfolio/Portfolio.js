import React from 'react';
import style from './Portfolio.module.css';
import Project from '../../Components/Cards/Project/Project';

const Portfolio = () => {
    return (

        <div className={style.Portfolio}>
            <div className = {style.Projects}>
                <Project/>
            </div>
        </div>
    
    )
}

export default Portfolio;