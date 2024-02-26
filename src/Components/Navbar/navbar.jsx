import React, { useState } from "react"; 
import {Link} from "react-router-dom";
import './Navbar.css';
import Logo from '../Assests/Images/OCE_LOGO3.png';
import cart_icon from '../Assests/Images/cart-icon.png';




const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="" />
      </div>
      <ul className="nav-menus">
        <li onClick={()=>{setMenu("home")}}><Link to='/'>Home</Link>{menu==="home"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("shop")}}><Link to='/shop'>Shop</Link>{menu==="shop"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("services")}}><Link to='/services'>Services</Link>{menu==="services"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("tumblers")}}><Link to='/tumblers'>Tumblers</Link>{menu==="tumblers"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("acrylics")}}><Link to='/acrylics'>Acrylics</Link>{menu==="acrylics"?<h/>:<></>}</li>
        <li onClick={()=>{setMenu("leather")}}><Link to='/leather'>Leathers</Link>{menu==="leather"?<h/>:<></>}</li>
        
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </nav>
  )
}

export default Navbar