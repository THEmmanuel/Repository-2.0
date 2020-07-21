import React from 'react'
import style from './Project.module.css'
import PrimaryCTA from '../../Buttons/PrimaryCTA/PrimaryCTA'
import SecondaryCTA from '../../Buttons/SecondaryCTA/SecondaryCTA'


const Project = (props) => {
    return (
        <div className={style.Project}>
            <img src={props.ProjectImage} alt="" />

            <div className={style.ProjectDetails}>
                <span clasName={style.ProjectName}>Project X</span>
                <span className={style.ProjectDescription}> </span>
                <div>
                    <PrimaryCTA text = 'Visit Site'/>
                    <SecondaryCTA text = 'View Code'/>
                </div>
            </div>

        </div>
    )
}

export default Project