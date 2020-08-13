import React from 'react'
import style from './NavBar.module.css'
import Logo from '../../Assets/SVG/Logo.svg'

const NavBar = () => {
    return (
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

    )
}


// <div className={style.NavItemsContainer}>
//                         
//                     </div>
export default NavBar;