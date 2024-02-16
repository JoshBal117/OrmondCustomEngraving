import React from "react";
import './Navbar.css';
import Logo from '../Assests/Images/Logo.png';
import cart_icon from '../Assests/Images/cart-icon.png';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="" />
      </div>
      <ul className="nav-menus">
        <li>Shop<hr/></li>
        <li>Awards</li>
        <li>Tumblers</li>
        <li>Stones</li>
        
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt=""/>
      </div>
    </nav>
  )
}

export default Navbar