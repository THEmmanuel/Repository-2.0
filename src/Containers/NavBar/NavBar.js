import React from 'react'
import style from './NavBar.module.css'
import Logo from '../../Assets/SVG/Logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavBar = () => {
    return (
        <header>
            <nav className={style.NavBar}>

                <div className={style.NavContentSmall}>
                    <img src={Logo} alt="Main Logo" className={style.NavLogo} />

                    <button className={style.NavHamburger}>
                        <img src="" alt="Nav Icon" />
                    </button>
                </div>

                <div className={style.NavItems}>
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