import React from 'react';
import style from './Portfolio.module.css';
import Project from '../../Components/Cards/Project/Project';
import TestImage from '../../Assets/testImage.jpg'

const Portfolio = () => {
    return (

        <div className={style.Portfolio}>
            <div className = {style.Projects}>
                <Project
                    ProjectImage = {TestImage}
                    
                />
            </div>
        </div>
    
    )
}

export default Portfolio;