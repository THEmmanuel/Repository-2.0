import React from 'react';
import style from './Portfolio.module.css';
import Project from '../../Components/Cards/Project/Project';
import TestImage from '../../Assets/TestImage02.png'
import PortfolioAnimation from '../../Assets/SVG/Asset 13.svg';

const Portfolio = () => {
    return (

        <section className={style.Portfolio}>
            <h2 className = {style.SectionTitle}>
                Featured Projects.
            </h2>
            <div className={style.Projects}>
                <Project
                    ProjectImage={TestImage}
                    ProjectName = 'Github User Search'
                    ProjectDescription = ''
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

        </section>

    )
}

export default Portfolio;