import React, { useState, useEffect } from 'react'
import style from './NavBar.module.css'
import Logo from '../../Assets/SVG/Logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import withSizes from 'react-sizes';


const NavBar = ({ isMobile }) => {

    const displayNav = {
        display: 'none',
    }

    const [navOpen, setNavOpen] = useState(true)
    navOpen ? displayNav.display = 'block' : displayNav.display = 'none'

    const navToggleHandler = () => {
        setNavOpen(!navOpen)
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
                        <img src="" alt="Nav Icon" />
                    </button>
                </div>
                {/* ${NavDisplay} */}

                <div className={`${style.NavItems}`} style={displayNav}>
                    <ul>
                        <Link
                            to='home'
                            smooth='true'>
                            <li onClick={() => mobileCheckHandler} >Home</li>
                        </Link>

                        <Link
                            to='portfolio'
                            smooth='true'>
                            <li onClick={() => mobileCheckHandler}>Portfolio</li>
                        </Link>

                        <Link
                            to='contact'
                            smooth='true'>
                            <li onClick={() => mobileCheckHandler}>Contact</li>
                        </Link>

                        <Link
                            to='home'
                            smooth='true'>
                            <li
                                onClick={mobileCheckHandler}
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