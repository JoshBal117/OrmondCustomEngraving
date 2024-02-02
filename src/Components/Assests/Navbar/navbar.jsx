import React from "react";
import './Navbar.css'
const Navbar = () =>  {

    return(
        <nav class="nav">
        <a href="index.html" class="logo">Ormond Custom Engravers</a>

        <div class="hamburger">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>

        <div class="nav__link hide">
          <a href="index.html">Home</a>
          <a href="about.html">About Us</a>
          <a href="shop.html">Shop</a>
          <a href="contact.html">Contact</a>
          <a href="blog.html">Blog</a>
        </div>
      </nav>
    )
}


export default Navbar