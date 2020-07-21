import React from 'react'
import style from './Project.module.css'
import PrimaryCTA from '../../Buttons/PrimaryCTA/PrimaryCTA'
import SecondaryCTA from '../../Buttons/SecondaryCTA/SecondaryCTA'


const Project = (props) => {
    return (
        <div className={style.Project}>
            <img src={props.ProjectImage} alt="" className = {style.ProjectImage}/>

            <div className={style.ProjectDetails}>
                <span className={style.ProjectName}>Project X</span>
                <span className={style.ProjectDescription}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, aliquam quia? Deserunt corporis deleniti maiores laboriosam similique pariatur sunt voluptatum corrupti omnis commodi accusamus repellendus consequatur ut sed, voluptatem tenetur. </span>
                <div className = {style.ProjectCTAs}>
                    <PrimaryCTA text = 'Visit Site'/>
                    <SecondaryCTA text = 'View Code'/>
                </div>
            </div>

        </div>
    )
}

export default Project