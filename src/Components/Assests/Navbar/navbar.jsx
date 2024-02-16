import React from "react";
import './Navbar.css'
import logo from '../Images/OCE LOGO.png'

const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});


const Navbar = () =>  {

  const [menu,setMenu] = useState("shop");

    return(
        <nav class="nav">
        <a href="index.html" class="logo" img src={logo} >Ormond Custom Engraving</a>
      
      <ul className= "nav-menu">
        <li onClock={()=>{setMenu("Shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClock={()=>{setMenu("Acrylics")}}><Link to='/'>Acrylics</Link>{menu==="Acrylics"?<hr/>:<></>}</li>
        <li onClock={()=>{setMenu("Metals")}}><Link to='/'>Metals</Link>{menu==="Metals"?<hr/>:<></>}</li>
        <li onClock={()=>{setMenu("tumbler")}}><Link to='/'>Tumbler</Link>{menu==="Tumbler"?<hr/>:<></>}</li>
        
      </ul>

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