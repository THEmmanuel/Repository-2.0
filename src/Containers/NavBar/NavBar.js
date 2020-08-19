import React, { useState, useEffect } from 'react'
import style from './NavBar.module.css'
import Logo from '../../Assets/SVG/Logo.svg';
import { Link } from 'react-scroll';
import withSizes from 'react-sizes';

//Todo : Addd a smaller navbar
//switch to the smaller navbar when width is less 480px

const NavBar = ({ isMobile }) => {

    let menuImage = ''


    const displayNav = {
        opacity: '0',
        display: 'none'
    }

    const [navOpen, setNavOpen] = useState(true)

    if (navOpen) {
        displayNav.display = 'block'
        displayNav.opacity = '0.98'
        menuImage = 'https://img.icons8.com/ios/30/FF4500/close-window.png'
    } else {
        displayNav.display = 'none'
        menuImage = 'https://img.icons8.com/ios/30/FF4500/menu.png'
    }

    const navToggleHandler = () => {
        if (isMobile) {
            setNavOpen(!navOpen)
        }
    }

    const mobileCheckHandler = () => {
        isMobile ? setNavOpen(false) : setNavOpen(true)
        console.log('I just ran')
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
                            <Link
                                to='home'
                                smooth='true'
                                onClick={navToggleHandler}
                                className={style.Resume}>
                                Resume
                            </Link>
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