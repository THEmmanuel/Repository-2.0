import React from 'react'
import style from './About.module.css'
import TestImage from '../../Assets/testImage.jpg'

const About = () => {
    return (
        <section className = {style.About}>
            <div className = {style.AboutContent}>
                <img src={TestImage} alt="" className = {style.AboutImage}/>
                <div>
                    <span className = {style.AboutDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio tenetur quisquam natus fugit earum fuga qui quibusdam quod? Officiis sequi minima nobis quos, sint tempora mollitia repudiandae aut recusandae.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla repellendus vel veritatis velit error, qui magnam asperiores, voluptates, quibusdam repudiandae! Dolor nulla hic illo velit quas? Sed, eum earum?
                    </span>
                </div>
            </div>
        </section>
    )
}

export default About
