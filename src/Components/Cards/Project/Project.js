import React from 'react'
import style from './Project.module.css'
import PrimaryCTA from '../../Buttons/PrimaryCTA/PrimaryCTA'
import SecondaryCTA from '../../Buttons/SecondaryCTA/SecondaryCTA'


const Project = (props) => {
    return (
        <div className={style.Project}>
            <img src={props.ProjectImage} alt="" className={style.ProjectImage} />

            <div className={style.ProjectDetails}>
                <span className={style.ProjectName}>{props.ProjectName}</span>
                <span className={style.ProjectDescription}>{props.ProjectDescription}</span>
                <span className={style.ProjectTechnologies}>{props.ProjectTechnologies}</span>
     
                <div className={style.ProjectCTAs}>
                    <PrimaryCTA text='Visit Site' Link = {props.ProjectLiveLink}/>
                    <SecondaryCTA text='View Code'/>
                </div>
            </div>

        </div>
    )
}

export default Project