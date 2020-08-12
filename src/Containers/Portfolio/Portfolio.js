import React from 'react';
import style from './Portfolio.module.css';
import Project from '../../Components/Cards/Project/Project';
import TestImage from '../../Assets/TestImage02.png'
import PortfolioAnimation from '../../Assets/SVG/Asset 13.svg';
import ProjectList from '../../Data/ProjectList';

const Portfolio = () => {
    return (

        <section className={style.Portfolio}>
            <h2 className={style.SectionTitle}>
                Featured Projects.
        </h2>
            <div className={style.Projects}>
                {ProjectList.map((project) =>
                    <Project
                        ProjectName = {project.ProjectName}
                        ProjectImage = {project.ProjectImage}
                        ProjectDescription = {project.ProjectDescription}
                        ProjectTechnologies = {project.ProjectTechnologies}
                        ProjectLiveLink = {project.ProjectLiveLink}
                        key = {project.ProjectID}
                     />)}
            </div>

            {/* <img src={PortfolioAnimation} className={style.PortfolioAnimation} alt="" /> */}

        </section>

    )
}

export default Portfolio;