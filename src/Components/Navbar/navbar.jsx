import React, { useState } from "react"; 
import './Navbar.css';
import Logo from '../Assests/Images/Logo.png';
import cart_icon from '../Assests/Images/cart-icon.png';




const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="" />
      </div>
      <ul className="nav-menus">
        <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("awards")}}>Awards{menu==="awards"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("tumblers")}}>Tumblers{menu==="tumblers"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("stones")}}>Stones{menu==="stones"?<h/>:<></>}</li>
        
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt=""/>
        <div className="nav-cart-count">0</div>
      </div>
    </nav>
  )
}

export default Navbar