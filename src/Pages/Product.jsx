import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { categories, findProduct } from '../data/catalog';
import NotFound from './NotFound';
import './CSS/Content.css';

export default function Product() {
  const { productId } = useParams();
  const product = findProduct(productId);
  if (!product) return <NotFound product />;
  const category = categories.find(item => item.id === product.category);

  return (
    <div className="container section">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/shop">Products</Link><span aria-hidden="true">/</span><Link to={'/' + category.id}>{category.title}</Link></nav>
      <section className="product-detail">
        <div className="product-detail-image"><img src={product.image} alt={product.name} /></div>
        <div className="product-detail-copy">
          <p className="eyebrow">MAKE IT YOURS</p><h1>{product.name}</h1>
          <p>{category.description}</p>
          <div className="detail-note"><h2>Your design, your details.</h2><p>Tell us the text or logo you would like engraved, how many you need, and your preferred date. We’ll confirm availability, design options, and pricing with your quote.</p></div>
          <Link className="button button-primary" to={'/contact?product=' + product.id}>Request a quote for this item <span aria-hidden="true">↗</span></Link>
          <p className="small-note">The design in the image is an example. Your custom details will be agreed before ordering.</p>
        </div>
      </section>
    </div>
  );
}
