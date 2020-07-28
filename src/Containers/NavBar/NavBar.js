import React from 'react'
import style from './NavBar.module.css'
import Logo from '../../Assets/SVG/Logo.svg'

const NavBar = () => {
    return (
        <header>
            <nav className = {style.NavBar}>
                <img src={Logo} alt="" className = {style.NavLogo}/>
                    {/* Logo will be here */}

                <div className = {style.NavItems}>
                    <ul>
                        <li>Home</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                        <li>Resume</li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default NavBar;