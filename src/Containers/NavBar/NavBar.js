import React, { useState } from 'react'
import style from './NavBar.module.css'
import Logo from '../../Assets/SVG/Logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';



const NavBar = () => {

    const displayNav = {
        display: 'none',
    }

    const [navOpen, setNavOpen] = useState(false)
    navOpen ? displayNav.display = 'block' : displayNav.display = 'none'

    const navControlHandler = () => {
        setNavOpen(!navOpen)
        console.log('I ran')
    }


    return (
        <header>
            <nav className={style.NavBar}>

                <div className={style.NavContentSmall}>
                    <img src={Logo} alt="Main Logo" className={style.NavLogo} />

                    <button className={style.NavHamburger} onClick={navControlHandler}>
                        <img src="" alt="Nav Icon" />
                    </button>
                </div>
                {/* ${NavDisplay} */}

                <div className={`${style.NavItems}`} style={displayNav}>
                    <ul>
                        <Link
                            to='home'
                            smooth='true'>
                            <li>Home</li>
                        </Link>

                        <Link
                            to='portfolio'
                            smooth='true'>
                            <li>Portfolio</li>
                        </Link>

                        <Link
                            to='contact'
                            smooth='true'>
                            <li>Contact</li>
                        </Link>

                        <Link
                            to='home'
                            smooth='true'>
                            <li className={style.Resume}>Resume</li>
                        </Link>

                    </ul>
                </div>
            </nav>
        </header>

    )
}
export default NavBar;