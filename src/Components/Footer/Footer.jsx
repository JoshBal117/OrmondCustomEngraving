import React from 'react'
import './Footer.css'
import instagram_icon from '../Assests/Images/instagram_logo_icon.png'
import facebook_icon from '../Assests/Images/facebook_logo_icon.png'
import pinterest_icon from '../Assests/Images/pinterest_icon.png'

const Footer = () => {

    return(
        <div className='footer'>
            <div className="footer-logo">
                <img src="" alt="" />
                <p>Ormond Custom Engraving</p>

            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Office</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icon'>
                <div className='footer-icon-container'>
                    <img src={instagram_icon} alt="" />
                </div>
                <div className='footer-icon-container'>
                    <img src={facebook_icon} alt="" />
                </div>
                <div className='footer-icon-container'>
                    <img src={pinterest_icon} alt="" />
                </div>
            </div>
            <div className="footer-copuright">
                <hr />
                <p>Copyright @ 2024 All Right Reserve</p>
            </div>
        </div>
        
    )
}


export default Footer
