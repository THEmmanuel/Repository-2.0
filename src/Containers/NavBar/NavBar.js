import React from 'react'
import style from './NavBar.module.css'
import Logo from '../../Assets/SVG/Logo.svg';
import { BrowserRouter as Router } from 'react-router-dom'
// import { NavHashLink as NavLink } from 'react-router-hashlink';

const NavBar = () => {
    return (
        <Router>
            <header>
                <nav className={style.NavBar}>
                    <img src={Logo} alt="Main Logo" className={style.NavLogo} />
                    {/* Logo will be here */}

                    <div className={style.NavItems}>
                        <ul>
                                <li>Home</li>
                            <li>Portfolio</li>
                            <li>Contact</li>
                            <li className={style.Resume}>Resume</li>
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