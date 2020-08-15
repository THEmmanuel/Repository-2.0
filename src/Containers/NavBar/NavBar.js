import React from 'react'
import style from './NavBar.module.css'
import Logo from '../../Assets/SVG/Logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavBar = () => {
    return (
        <Router>
            <header>
                <nav className={style.NavBar}>
                    <img src={Logo} alt="Main Logo" className={style.NavLogo} />
                    {/* Logo will be here */}

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
        </Router>

    )
}


// <div className={style.NavItemsContainer}>
//                         
//                     </div>
export default NavBar;