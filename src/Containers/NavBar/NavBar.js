import React from 'react'
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <header>
            <nav className = {style.NavBar}>
                <div>
                    Logo will be here
                </div>

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