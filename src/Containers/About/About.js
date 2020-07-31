import React from 'react'
import style from './About.module.css'
import TestImage from '../../Assets/testImage.jpg'
import AboutAnimation from '../../Assets/SVG/Asset 12.svg'

const About = () => {
    return (
        <section className = {style.About}>
            <h2 className = {style.SectionTitle}>
                About Me.
            </h2>
            <div className = {style.AboutContent}>
                <img src={TestImage} alt="" className = {style.AboutImage}/>
                <div>
                    <span className = {style.AboutDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio tenetur quisquam natus fugit earum fuga qui quibusdam quod? Officiis sequi minima nobis quos, sint tempora mollitia repudiandae aut recusandae.
                        <p/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla repellendus vel veritatis velit error, qui magnam asperiores, voluptates, quibusdam repudiandae! Dolor nulla hic illo velit quas? Sed, eum earum?
                    </span>
                </div>
            </div>
            <img src={AboutAnimation} alt="" className = {style.AboutAnimation}/>
        </section>
    )
}

export default About
