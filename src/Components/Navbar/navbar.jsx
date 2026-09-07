import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../Assests/Images/OCE_LOGO3.png';
import './Navbar.css';

const links = [['/', 'Home'], ['/shop', 'Products'], ['/services', 'Services'], ['/about', 'About']];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location]);

  function handleKeyDown(event) {
    if (event.key === 'Escape' && open) {
      setOpen(false);
      toggle.current?.focus();
    }
  }

  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <div className="brand-strip">Custom gifts. Meaningful awards. Your personal touch.</div>
      <div className="navbar container">
        <Link className="brand" to="/" aria-label="Ormond Custom Engraving home">
          <img src={Logo} width="75" height="60" alt="" />
          <span className="brand-name">ORMOND<span>CUSTOM ENGRAVING</span></span>
        </Link>
        <button className="menu-toggle" ref={toggle} type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          <span>{open ? 'Close' : 'Menu'}</span>
          <span className={'menu-icon ' + (open ? 'is-open' : '')} aria-hidden="true"><span /><span /></span>
        </button>
        <nav id="main-navigation" className={'main-navigation ' + (open ? 'is-open' : '')} aria-label="Main navigation">
          {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <Link className="button button-dark nav-quote" to="/contact" onClick={() => setOpen(false)}>Request a quote <span className="arrow" aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
