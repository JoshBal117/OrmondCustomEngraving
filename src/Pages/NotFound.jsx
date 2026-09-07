import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound({ product = false }) {
  return <section className="empty-state"><p className="eyebrow">LET’S FIND THE RIGHT PLACE</p><h1 className="section-heading">{product ? 'That product isn’t available.' : 'We couldn’t find that page.'}</h1><p>Explore the catalog, or get in touch about a custom engraving project.</p><div className="button-row"><Link className="button button-primary" to="/shop">Explore products</Link><Link className="button button-outline" to="/contact">Contact us</Link></div></section>;
}
