import React from 'react'
import style from './About.module.css'
import TestImage from '../../Assets/testImage.jpg'
import AboutAnimation from '../../Assets/SVG/Asset 12.svg'

const About = () => {
    return (
        <section className={style.About}>
            <h2 className={style.SectionTitle}>
                About Me.
            </h2>
            <div className={style.AboutContent}>
                <img src={TestImage} alt="" className={style.AboutImage} />
                <div>
                    <span className={style.AboutDescription}>I've always been an artist and building websites and apps have given me the chance to mix my artistic side with my fascination for problem solving. 
                    <p/>
                    I love watching ideas flow and learning from and teaching other people things. I believe that's the best way to foster quick personal and group development.
                    <p/>
                    I have spent a lot of time trying to understand vanilla JavaScript so I should be able to learn and pick any JavaScript based framework and/or library up pretty fast.
                    <p/>
                    When I'm not coding you can find me playing video games, losing myself in a book, making illustrations or writing short stories and poems.

                    </span>
                </div>
            </div>
            <img src={AboutAnimation} alt="" className={style.AboutAnimation} />
        </section>
    )
}

export default About
