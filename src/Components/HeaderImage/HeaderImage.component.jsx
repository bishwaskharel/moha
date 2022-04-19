import React from 'react'
import Background from "../Images/Background.png";
import "./HeaderImage.style.scss"

const HeaderImage = () => {
    return (
        <>
        <div >
            
            <img className="backgroundImg" src={Background} alt="Creatives Logo"  />
            
        </div>
        </>
    )
}

export default HeaderImage
