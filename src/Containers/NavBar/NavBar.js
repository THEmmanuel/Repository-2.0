import React, { useState, useEffect } from 'react'
import style from './NavBar.module.css'
import Logo from '../../Assets/SVG/Logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import withSizes from 'react-sizes';

//Two versions of navbar
//one for mobile
//.One for desktop
// Switch dependng on the viewport width


const NavBar = ({ isMobile }) => {

    let menuImage = ''


    const displayNav = {
        opacity: '0',
        display: 'none'
    }

    const [navOpen, setNavOpen] = useState(true)

    if (navOpen) {
        displayNav.display= 'block'
        displayNav.opacity= '96%'
        menuImage = 'https://img.icons8.com/ios/30/FF4500/close-window.png'
    } else {
        displayNav.display = 'none'
        // displayNav.opacity = '0'
        menuImage = 'https://img.icons8.com/ios/30/FF4500/menu.png'
    }

    const navToggleHandler = () => {
        if (isMobile) {
            setNavOpen(!navOpen)
        }
        console.log({ isMobile })
    }
    // console.log({ isMobile })

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
                        <Link
                            to='home'
                            smooth='true'>
                            <li onClick={navToggleHandler} >Home</li>
                        </Link>

                        <Link
                            to='portfolio'
                            smooth='true'>
                            <li onClick={navToggleHandler}>Portfolio</li>
                        </Link>

                        <Link
                            to='contact'
                            smooth='true'>
                            <li onClick={navToggleHandler}>Contact</li>
                        </Link>

                        <Link
                            to='home'
                            smooth='true'>
                            <li
                                onClick={navToggleHandler}
                                className={style.Resume}>Resume</li>
                        </Link>

                    </ul>
                </div>
            </nav>
        </header>

    )
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 480,
})

export default withSizes(mapSizesToProps)(NavBar);