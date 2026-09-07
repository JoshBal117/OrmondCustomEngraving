import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

export default function Item({ id, name, image }) {
  return (
    <article className="item">
      <Link className="product-card-link" to={'/product/' + id}>
        <div className="product-card-image"><img src={image} alt="" loading="lazy" /></div>
        <div className="product-card-copy"><h2>{name}</h2><span>View & personalize <span aria-hidden="true">↗</span></span></div>
      </Link>
    </article>
  );
}
