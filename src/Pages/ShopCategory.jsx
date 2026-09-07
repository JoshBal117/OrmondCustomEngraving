import React from 'react';
import { Link } from 'react-router-dom';
import { categories, products } from '../data/catalog';
import Item from '../Components/item/item';
import './CSS/ShopCategory.css';

export default function ShopCategory({ category }) {
  const selectedCategory = categories.find(item => item.id === category);
  const visibleProducts = category ? products.filter(item => item.category === category) : products;
  return (
    <>
      <section className="page-heading"><div className="container"><p className="eyebrow">FIND YOUR STARTING POINT</p><h1>{selectedCategory?.title || 'Make something yours.'}</h1><p>{selectedCategory?.description || 'Explore products for your next gift, event, or business project. Choose an item to start a custom quote.'}</p></div></section>
      <section className="section container catalog-section" aria-label="Product catalog">
        <nav className="category-filters" aria-label="Product categories">
          <Link to="/shop" aria-current={!category ? 'page' : undefined}>All products</Link>
          {categories.map(item => <Link key={item.id} to={'/' + item.id} aria-current={category === item.id ? 'page' : undefined}>{item.title}</Link>)}
        </nav>
        <div className="catalog-note"><p>{visibleProducts.length} products to personalize</p><p>Designs shown are examples. Availability and pricing are confirmed with your quote.</p></div>
        <div className="product-grid">{visibleProducts.map(item => <Item key={item.id} {...item} />)}</div>
      </section>
    </>
  );
}
