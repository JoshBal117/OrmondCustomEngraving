import React from 'react';
import { Link } from 'react-router-dom';
import engravingDetail from '../Components/Assests/Images/place holder 4.jpg';
import tumbler from '../Components/Assests/Images/p35_img.jpg';
import acrylic from '../Components/Assests/Images/p1_img.jpg';
import leather from '../Components/Assests/Images/cp2_leather.jpg';
import './CSS/Home.css';

const categories = [
  { name: 'Tumblers & drinkware', label: 'FOR THE EVERYDAY', description: 'A name, a logo, a little personality. Make their favorite cup their own.', image: tumbler, to: '/tumblers', style: 'tumbler' },
  { name: 'Awards & acrylics', label: 'FOR THE MILESTONES', description: 'Recognize the people and moments that deserve a place on display.', image: acrylic, to: '/acrylics', style: 'acrylic' },
  { name: 'Leather & patches', label: 'FOR THE FINISHING TOUCH', description: 'Personal details for tags, patches, and gifts with character.', image: leather, to: '/leather', style: 'leather' },
];

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow">ORMOND CUSTOM ENGRAVING</p>
          <h1 id="hero-heading">Make it<br /><em>personal.</em></h1>
          <p className="hero-description">A name worth remembering. A moment worth keeping. Custom engraving brings your idea to life.</p>
          <div className="button-row">
            <Link className="button button-dark" to="/contact">Request a quote <span className="arrow" aria-hidden="true">↗</span></Link>
            <Link className="button hero-secondary" to="/shop">Explore products <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
          <p className="hero-footnote">Personal gifts <span aria-hidden="true">/</span> Business branding <span aria-hidden="true">/</span> Special occasions</p>
        </div>
        <figure className="hero-photo">
          <img src={engravingDetail} width="2000" height="2000" alt="Close-up of a detailed character design engraved into wood" />
          <figcaption><span>THE POSSIBILITIES ARE IN THE DETAILS</span><span>Wood engraving inspiration</span></figcaption>
        </figure>
      </section>
      <section className="section container" aria-labelledby="categories-heading">
        <div className="section-topline">
          <div><p className="eyebrow">YOUR IDEA. YOUR CANVAS.</p><h2 className="section-heading" id="categories-heading">Find your starting point.</h2></div>
          <Link className="text-link" to="/shop">Explore all products <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="category-grid">
          {categories.map(category => (
            <Link key={category.to} className="category-card" to={category.to}>
              <div className={'category-image category-image-' + category.style}><img src={category.image} alt="" loading="lazy" /></div>
              <div className="category-copy"><p className="eyebrow">{category.label}</p><h3>{category.name}<span aria-hidden="true">↗</span></h3><p>{category.description}</p></div>
            </Link>
          ))}
        </div>
      </section>
      <section className="process-section" aria-labelledby="process-heading">
        <div className="container process-layout">
          <div><p className="eyebrow">LET’S MAKE SOMETHING YOURS</p><h2 className="section-heading" id="process-heading">It starts with<br />a conversation.</h2><p className="section-intro">Have a design in mind, or still figuring it out? Share the details so we can work toward the right fit.</p><Link className="text-link" to="/services">Explore our services <span aria-hidden="true">↗</span></Link></div>
          <ol className="process-steps">
            <li><span aria-hidden="true">01</span><div><h3>Tell us your idea</h3><p>Choose a product or describe your project. Include your engraving text, quantity, and preferred date.</p></div></li>
            <li><span aria-hidden="true">02</span><div><h3>Work out the details</h3><p>Confirm the material, design, price, and timing before moving ahead.</p></div></li>
            <li><span aria-hidden="true">03</span><div><h3>Make it happen</h3><p>Once you approve the quote, arrange payment and the next steps for your custom piece.</p></div></li>
          </ol>
        </div>
      </section>
      <section className="home-quote container" aria-labelledby="quote-heading">
        <div><p className="eyebrow">SOMETHING IN MIND?</p><h2 className="section-heading" id="quote-heading">Let’s put your idea into words.</h2><p>Tell us what you would like to create.</p></div>
        <Link className="button button-primary" to="/contact">Request a quote <span className="arrow" aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
