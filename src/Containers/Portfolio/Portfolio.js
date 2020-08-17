import React from 'react';
import style from './Portfolio.module.css';
import Project from '../../Components/Cards/Project/Project';
import ProjectList from '../../Data/ProjectList';

const Portfolio = () => {
    return (

        <section className={style.Portfolio} id='portfolio'>
            <h2 className={style.SectionTitle}>
                Featured Projects.
        </h2>
            <div className={style.Projects}>
                {ProjectList.map((project) =>
                    <Project
                        ProjectName={project.ProjectName}
                        ProjectImage={project.ProjectImage}
                        ProjectDescription={project.ProjectDescription}
                        ProjectTechnologies={project.ProjectTechnologies}
                        ProjectLiveLink={project.ProjectLiveLink}
                        ProjectRepoLink={project.ProjectRepoLink}
                        key={project.ProjectID}

                    />)}
            </div>
        </section>

    )
}

export default Portfolio;