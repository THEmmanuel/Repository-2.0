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
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur magni aliquid! Recusandae quidem itaque dolorem facere magnam quas sit mollitia ut ad reprehenderit a sapiente obcaecati, suscipit accusamus nulla.</span>



                    <div className={style.WorkTimelineIndicator}>
                        <div className={style.TimeIndicator}></div>
                        <span className={style.line} ></span>
                        <div className={style.TimeIndicator02}>
                            <div className={style.InnerCircle}></div>
                        </div>
                    </div>



                    <span className = {style.WorkExperience02}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facere accusantium earum dicta voluptatibus inventore architecto quaerat tempore, quisquam fugit, omnis soluta dolore explicabo voluptatum illum magni qui. Accusantium, commodi.</span>
                </div>

            </div>
            <img src={WorkAnimation} alt="" className={style.WorkAnimation} />
        </div>
    )
}

export default Work;