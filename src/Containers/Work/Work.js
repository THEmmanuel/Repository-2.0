import React from 'react';
import style from './Work.module.css';


const Work = () => {
    return (
        <section className={style.Work}>
            <h2 className={style.SectionTitle}>
                Work Experience.
            </h2>
            <div className={style.WorkExperiences}>

                <div className={style.WorkExperience}>
                    <div className = {style.WorkExperienceContainer}>
                        <span className={style.WorkExperienceTitle}>
                            Freelance
                        </span>
                        <span className={style.WorkExperienceDescription}>
                            I built and developed websites using the latest, appropriate and/or specified technologies while adhering to specifications of the high fidelity prototypes I designed or received from my clients.
                            <br />
                            Most importantly I enhanced my social skills by developing proper communication, comprehension and conflict resolution skills.
                        </span>
                    </div>



                    <div className={style.WorkTimelineIndicator}>
                        <div className={style.TimeIndicator}></div>
                        <span className={style.line} ></span>
                        <div className={`${style.TimeIndicator} ${style.Filled} `}>
                            <div className={style.InnerCircle}></div>
                        </div>
                    </div>



                    <div className={`${style.WorkExperience02} ${style.WorkExperienceContainer}`}>
                        <span className={style.WorkExperienceTitle}>
                            You decide :-)
                        </span>

                        <span className={style.WorkExperienceDescription}>
                            I'm currently searching for my first role as Frontend/UI developer. 
                            <br/>
                        I'm certain I'll be a great addition to your team.
                            You can <a href = 'contact link'>contact me</a> or <a href = 'resumelink'>view my resume</a> first.
                        </span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Work;