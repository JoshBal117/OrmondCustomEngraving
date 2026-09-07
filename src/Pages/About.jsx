import React from 'react';
import { Link } from 'react-router-dom';
import { business } from '../data/business';
import './CSS/Content.css';

export default function About() {
  return (
    <>
      <section className="page-heading"><div className="container"><p className="eyebrow">ABOUT ORMOND CUSTOM ENGRAVING</p><h1>Personal projects.<br />A real conversation.</h1><p>Custom engraving for gifts, business branding, and the moments you want to remember.</p></div></section>
      <section className="container section about-layout">
        <div><h2 className="section-heading">Let’s start with your idea.</h2><p>Whether you have the exact design ready or just a starting point, tell us what you want to create. We’ll talk through the item, engraving, quantity, and timing before confirming a quote.</p><p>Each project begins with the details that matter to you: a name, a message, a logo, or a special occasion.</p><Link className="button button-primary" to="/contact">Get in touch <span aria-hidden="true">↗</span></Link></div>
        <aside className="market-card"><p className="eyebrow">MEET US IN PERSON</p><h2>Daytona Beach<br />farmers market</h2><p>Come say hello and talk about your next project. Call ahead to confirm our market dates and where to find the booth.</p><a className="text-link" href={business.phoneHref}>Call {business.phone} <span aria-hidden="true">↗</span></a></aside>
      </section>
    </>
  );
}
