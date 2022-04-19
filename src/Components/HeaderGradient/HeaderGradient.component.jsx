import React from 'react'
import Gradient from "../Images/Gradient.png";
import "./HeaderGradient.style.scss"

const HeaderImage = () => {
    return (
        <>
        <div >
            
            <img className="backgroundImg" src={Gradient} alt="Creatives Logo"  />
            
        </div>
        </>
    )
}

export default HeaderImage
