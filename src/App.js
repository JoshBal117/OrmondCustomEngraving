import React, { useEffect, useRef } from 'react';
import { BrowserRouter, HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import { categories, findProduct } from './data/catalog';
import './App.css';

function RouteEffects() {
  const location = useLocation();
  const previousPath = useRef(location.pathname);
  useEffect(() => {
    const path = location.pathname.toLowerCase();
    const category = categories.find(item => '/' + item.id === path);
    const product = path.startsWith('/product/') ? findProduct(path.split('/')[2]) : null;
    const titles = { '/': 'Custom gifts & engraving', '/shop': 'Products', '/services': 'Services', '/about': 'About', '/contact': 'Request a quote' };
    const title = product?.name || category?.title || titles[path] || 'Page not found';
    document.title = title + ' | Ormond Custom Engraving';
    if (previousPath.current !== location.pathname) {
      window.scrollTo(0, 0);
      document.getElementById('main-content')?.focus();
      previousPath.current = location.pathname;
    }
  }, [location.pathname]);
  return null;
}

export default function App() {
  // Pages serves static files, so keep client routes after the URL's #.
  // The normal local preview continues to use clean browser routes.
  const SiteRouter = process.env.REACT_APP_ROUTER === 'hash' ? HashRouter : BrowserRouter;
  return (
    <SiteRouter>
      <div className="site-shell">
        <a className="skip-link" href="#main-content" onClick={event => {
          event.preventDefault();
          document.getElementById('main-content')?.focus();
        }}>Skip to content</a>
        <RouteEffects />
        <Navbar />
        <main id="main-content" tabIndex="-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/services" element={<Services />} />
            {categories.map(category => <Route key={category.id} path={'/' + category.id} element={<ShopCategory category={category.id} />} />)}
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/product" element={<Navigate to="/shop" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Navigate to="/contact" replace />} />
            <Route path="/login" element={<Navigate to="/contact" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </SiteRouter>
  );
}
