import React from 'react';
import style from './Portfolio.module.css';
import Project from '../../Components/Cards/Project/Project';
import TestImage from '../../Assets/testImage.jpg'
import PortfolioAnimation from '../../Assets/SVG/Asset 8.svg';

const Portfolio = () => {
    return (

        <div className={style.Portfolio}>
            <div className={style.Projects}>
                <Project
                    ProjectImage={TestImage}
                />

                <Project
                    ProjectImage={TestImage}
                />

                <Project
                    ProjectImage={TestImage}
                />

                <Project
                    ProjectImage={TestImage}
                />
            </div>

            <img src={PortfolioAnimation} className={style.PortfolioAnimation} alt="" />

        </div>

    )
}

export default Portfolio;