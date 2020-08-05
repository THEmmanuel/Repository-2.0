import React from 'react';
import style from './Work.module.css';
import WorkAnimation from '../../Assets/SVG/Asset 11.svg'


const Work = () => {
    return (
        <div className={style.Work}>
            <h2 className={style.SectionTitle}>
                Work Experience.
            </h2>
            <div className={style.WorkExperiences}>

                <div className={style.WorkExperience}>
                    <div>
                        <span className={style.WorkExperienceTitle}>
                            Freelance
                        </span>
                        <span className={style.WorkExperienceDescription}>
                            I built and developed websites using the latest, appropriate and/or specified technologies while adhering to specifications of the high fidelity prototypes I designed or received from my clients from Fiverr and referrals from friends.
                            <br />
                            More importantly I enhanced my social skills by developing proper communication, comprehension and conflict resolution skills.
                        </span>
                    </div>



                    <div className={style.WorkTimelineIndicator}>
                        <div className={style.TimeIndicator}></div>
                        <span className={style.line} ></span>
                        <div className={style.TimeIndicator02}>
                            <div className={style.InnerCircle}></div>
                        </div>
                    </div>



                    <div className={style.WorkExperience02}>
                        <span className={style.WorkExperienceTitle}>
                            You decide :-)
                        </span>

                        <span className={style.WorkExperienceDescription}>
                            I'm currently searching for my first gig as Frontend/UI developer. 
                            <br/>
                        I'm certain I'll be a great addition to your team.
                            You can contact me or view my resume first.
                        </span>
                    </div>
                </div>

            </div>
            <img src={WorkAnimation} alt="" className={style.WorkAnimation} />
        </div>
    )
}

export default Work;