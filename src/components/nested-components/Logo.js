import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Logo = ({setIsMenuOpened}) => {
    // Scrolls to top of home page if user is already on home page
    const handleLogoClick = () => {
        if (window.location.pathname === "/Home") window.scrollTo(0, 0);
        setIsMenuOpened(false)
    }
    
    return (
        <Link to="/" className="logo" onClick={handleLogoClick}>
            <img src={logo}
             height="50px" width='100px' background='transparent' />
            {/* <h1>&ensp;FitHub</h1>
            <h1>HealthiFy</h1> */}
        </Link>
  )
}

export default Logo