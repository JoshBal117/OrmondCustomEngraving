import React from 'react'
import './Hero.css'
import hand_icon from '../Images/hand_icon.png'
import arrow_icon from '../Images/Arrow Icon.png'
import hero_image from '../Images/test Hero Image.jpg'


const Hero = () => {
    return(
        <div className= 'hero'>
            <div className= 'hero-left'>
                <h2>QUALITY AND PRECISION</h2>
                    <div>
                        <div className='hand-hand-icon'>
                            <p>The Best Materials</p>
                            <img src={hand_icon.png} alt="" />
                        </div>
                        <p>chosen to</p>
                        <p>make your</p>
                        <p>memories timless</p>
                    </div>
                    <div className="hero-latest-btn"></div>
                    <div>Our Materials</div>
                    <img src={arrow_icon} alt="" />
            </div> 
            <div className= "hero-right">
                <img src={hero_image} alt="" />
            </div>         
        </div>
    )
}