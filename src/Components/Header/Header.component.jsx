import React from 'react'
 import LogoWeb from "../../Components/Images/LogoWeb.png"
import "./Header.style.scss"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div>
            <div className="outerHeader">
            <div className="header">
                <div className="logoContainer">
                <Link to="/"> <img src={LogoWeb} alt="Moha Creatives Logo"  /> </Link>
                </div>
                <nav>
                 <ul className="navLinks">
                          <li ><Link className="navLinks" to="/">Home </Link></li>
                          <li ><Link className="navLinks" to="/service">Service </Link></li>
                          <li ><Link className="navLinks" to="/work">Works </Link></li>
                          <li ><Link className="navLinks" to="/blogs">Blogs </Link></li>
                          <li ><Link className="navLinks" to="/contactus">Contact Us </Link></li>
                 </ul>
                 </nav>
            </div>     

            </div>
            
        </div>
    )
}

export default Header
