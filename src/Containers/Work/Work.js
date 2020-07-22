import React from 'react';
import style from './Work.module.css';
import WorkAnimation from '../../Assets/SVG/Asset 7.svg'


const Work = () => {
    return (
        <div className={style.Work}>
            <div className = {style.WorkExperiences}>
                <span>
                    Work Experiences will appear here
                </span>
            </div>
            <img src={WorkAnimation} alt="" className = {style.WorkAnimation}/>
        </div>
    )
}

export default Work;