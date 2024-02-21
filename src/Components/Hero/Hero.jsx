import React from "react";
import './Hero.css'
import hand_icon from '../Assests/Images/hand_icon.png'
import hero_image from '../Assests/Images/test Hero Image1.jpg'


const Hero =() => {
    return(

    <div className="hero">
        <div className="hero-left">
            <h2>Check out our Custom Services</h2>
        </div>
            <div className="hero-hand-icon">
                
                <img src={hand_icon} alt="" />
                <p2>Where Your Vision</p2>
                <p3>Is Turned Into</p3>
                <p4>Timeless Precision</p4>
            </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
    )
    
}

export default Hero