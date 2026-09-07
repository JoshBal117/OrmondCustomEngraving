import React from 'react';
import { Link } from 'react-router-dom';
import { business } from '../../data/business';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div><Link className="footer-wordmark" to="/">ORMOND<span>CUSTOM ENGRAVING</span></Link><p>Make it personal.</p><a className="footer-phone" href={business.phoneHref}>{business.phone}</a></div>
        <nav aria-label="Footer navigation"><Link to="/shop">Products</Link><Link to="/services">Services</Link><Link to="/about">About</Link><Link to="/contact">Request a quote</Link></nav>
      </div>
      <div className="container footer-bottom"><p>© {new Date().getFullYear()} Ormond Custom Engraving</p><p>Custom gifts. Lasting impressions.</p></div>
    </footer>
  );
}
