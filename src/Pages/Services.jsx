import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/catalog';
import './CSS/Content.css';

export default function Services() {
  return (
    <>
      <section className="page-heading"><div className="container"><p className="eyebrow">CUSTOM ENGRAVING</p><h1>A personal touch.<br />Plenty of possibilities.</h1><p>From an everyday favorite to a meaningful gift, start with an item and make it your own.</p></div></section>
      <section className="section container service-list" aria-label="Engraving services">
        {categories.map((category, index) => <article key={category.id}><span className="service-number">0{index + 1}</span><div><h2>{category.title}</h2><p>{category.description}</p></div><Link className="text-link" to={'/' + category.id}>Explore <span className="sr-only">{category.title}</span><span aria-hidden="true">↗</span></Link></article>)}
      </section>
      <section className="container custom-project"><div><p className="eyebrow">HAVE SOMETHING ELSE IN MIND?</p><h2 className="section-heading">Tell us about your project.</h2><p>For an item you already own, contact us first to check whether its material and finish are suitable for engraving.</p></div><Link className="button button-primary" to="/contact">Discuss your idea <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
