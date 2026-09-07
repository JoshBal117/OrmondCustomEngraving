import React, { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { business } from '../data/business';
import { findProduct } from '../data/catalog';
import { quoteBody, quoteMailto } from '../utils/quote';
import './CSS/Content.css';

function QuoteForm({ product }) {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', item: product?.name || '', quantity: '1', details: '', date: '' });
  const [prepared, setPrepared] = useState(false);
  const resultHeading = useRef(null);

  function update(event) {
    event.target.setCustomValidity('');
    setFields(previous => ({ ...previous, [event.target.name]: event.target.value }));
    setPrepared(false);
  }

  function prepare(event) {
    event.preventDefault();
    for (const name of ['name', 'item', 'details']) {
      if (!fields[name].trim()) {
        const input = event.currentTarget.elements.namedItem(name);
        input.setCustomValidity('Please enter your ' + (name === 'details' ? 'project details.' : name + '.'));
        input.reportValidity();
        return;
      }
    }
    setPrepared(true);
    requestAnimationFrame(() => resultHeading.current?.focus());
  }

  return (
    <form className="quote-form" onSubmit={prepare}>
      <h2>Tell us what you have in mind.</h2>
      <p className="form-intro">Prepare your request below, then send it using your email app. Fields marked * are required.</p>
      <div className="form-grid">
        <label>Your name *<input required name="name" autoComplete="name" maxLength={80} value={fields.name} onChange={update}  /></label>
        <label>Email address *<input required name="email" type="email" autoComplete="email" maxLength={120} value={fields.email} onChange={update} /></label>
        <label>Phone number <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" maxLength={30} value={fields.phone} onChange={update} /></label>
        <label>Quantity *<input required name="quantity" type="number" min="1" max="10000" step="1" value={fields.quantity} onChange={update} /></label>
        <label className="form-wide">Project or item *<input required name="item" placeholder="For example, tumblers with a business logo" maxLength={120} value={fields.item} onChange={update}  /></label>
        <label className="form-wide">Engraving text and project details *<textarea required name="details" rows="5" maxLength={700} value={fields.details} onChange={update} placeholder="What would you like engraved? Tell us about the design, material, or occasion." /></label>
        <label>Preferred date <span>(optional)</span><input name="date" type="date" value={fields.date} onChange={update} /></label>
      </div>
      <p className="small-note">Have artwork? You can attach it in your email app before sending. Please keep the description brief.</p>
      <button className="button button-dark" type="submit">Prepare email request <span aria-hidden="true">↗</span></button>
      {prepared && <section className="quote-ready" aria-labelledby="quote-ready-heading">
        <h3 id="quote-ready-heading" tabIndex="-1" ref={resultHeading}>Your request is ready to email.</h3>
        <p>Nothing has been sent yet. Open your email app, review the request, and press Send there.</p>
        <a className="button button-primary" href={quoteMailto(fields)}>Open email app <span aria-hidden="true">↗</span></a>
        <details><summary>No email app opened?</summary><p>Copy the request below into an email addressed to <strong>{business.email}</strong>, or call <a href={business.phoneHref}>{business.phone}</a>.</p><label className="request-copy">Your request<textarea readOnly rows="10" value={quoteBody(fields)} onFocus={event => event.target.select()} /></label></details>
      </section>}
    </form>
  );
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const product = findProduct(searchParams.get('product'));
  return (
    <>
      <section className="page-heading"><div className="container"><p className="eyebrow">LET’S MAKE IT PERSONAL</p><h1>Request a quote.</h1><p>Tell us about your project. We’ll work out the details, confirm pricing, and arrange payment with you.</p></div></section>
      <div className="container section contact-layout">
        <aside className="contact-info">
          <h2>Prefer a conversation?</h2><p>Call or email to discuss your idea.</p>
          <dl><dt>CALL</dt><dd><a href={business.phoneHref}>{business.phone}</a></dd><dt>EMAIL</dt><dd><a href={'mailto:' + business.email}>{business.email}</a></dd></dl>
          <div className="contact-market"><p className="eyebrow">FIND US IN PERSON</p><h3>Daytona Beach farmers market</h3><p>Call ahead to confirm market dates and our booth location.</p></div>
        </aside>
        <QuoteForm key={product?.id || 'custom'} product={product} />
      </div>
    </>
  );
}
