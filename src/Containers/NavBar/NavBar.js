import React, { useState, useEffect } from 'react'
import style from './NavBar.module.css'
import Logo from '../../Assets/SVG/Logo.svg';
import { Link } from 'react-scroll';
import withSizes from 'react-sizes';


const NavBar = ({ isMobile }) => {

    let menuImage = ''


    const displayNav = {
        opacity: '0',
        pointerEvents : 'none'
    }

    const [navOpen, setNavOpen] = useState(true)

    if (navOpen) {
        displayNav.opacity = '0.98'
        displayNav.pointerEvents = 'all'
        menuImage = 'https://img.icons8.com/ios/30/FF4500/close-window.png'
    } else {
        displayNav.opacity = '0'
        menuImage = 'https://img.icons8.com/ios/30/FF4500/menu.png'
    }

    const navToggleHandler = () => {
        if (isMobile) {
            setNavOpen(!navOpen)
        }
    }

    const mobileCheckHandler = () => {
        isMobile ? setNavOpen(false) : setNavOpen(true)
    }

    useEffect(mobileCheckHandler, [])


    return (
        <header>
            <nav className={style.NavBar}>

                <div className={style.NavContentSmall}>
                    <img src={Logo} alt="Main Logo" className={style.NavLogo} />

                    <button className={style.NavHamburger} onClick={navToggleHandler}>
                        <img src={menuImage} alt="Nav Icon" />
                    </button>
                </div>
                {/* ${NavDisplay} */}

                <div className={`${style.NavItems}`} style={displayNav}>
                    <ul>

                        <li >
                            <Link
                                to='home'
                                smooth='true'
                                onClick={navToggleHandler}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='portfolio'
                                smooth='true'
                                onClick={navToggleHandler}>
                                Portfolio
                             </Link>
                        </li>

                        <li onClick={navToggleHandler}>
                            <Link
                                to='contact'
                                smooth='true'
                                onClick={navToggleHandler}>
                                Contact
                            </Link>
                        </li>


                        <li onClick={navToggleHandler}>
                            <a
                                href="https://drive.google.com/file/d/1gudfLsgowzYm5q5CTP7VdatKIFUhkp21/view?usp=sharing" 
                                target="_blank"
                                 rel="noopener noreferrer"
                                onClick={navToggleHandler}
                                className={style.Resume}>
                                Resume
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>

    )
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 510,
})

export default withSizes(mapSizesToProps)(NavBar);