import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';
import { quoteMailto } from './utils/quote';

beforeEach(() => {
  delete process.env.REACT_APP_ROUTER;
  window.history.replaceState({}, '', '/');
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
});
afterEach(() => {
  delete process.env.REACT_APP_ROUTER;
  jest.restoreAllMocks();
});

test('the homepage leads to products and a quote request', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /Make it.*personal/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^Explore products/ })).toHaveAttribute('href', '/shop');
  expect(screen.getAllByRole('link', { name: /^Request a quote/ })[0]).toHaveAttribute('href', '/contact');
});

test('the menu opens, closes with Escape, and restores focus', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: /Menu/ });
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  fireEvent.keyDown(toggle, { key: 'Escape' });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(toggle).toHaveFocus();
});

test('navigation changes the page, updates its active link, and closes the menu', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /Menu/ }));
  const navigation = screen.getByRole('navigation', { name: 'Main navigation' });
  fireEvent.click(within(navigation).getByRole('link', { name: 'Products', exact: true }));
  expect(screen.getByRole('heading', { level: 1, name: 'Make something yours.' })).toBeInTheDocument();
  expect(within(navigation).getByRole('link', { name: 'Products', exact: true })).toHaveAttribute('aria-current', 'page');
  expect(screen.getByRole('button', { name: /Menu/ })).toHaveAttribute('aria-expanded', 'false');
});

test('a product quote keeps the selected item and uses the confirmed contact details', () => {
  window.history.replaceState({}, '', '/product/35');
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('14oz Green Insulated Pilsner Tumbler');
  fireEvent.click(screen.getByRole('link', { name: /Request a quote for this item/ }));
  expect(screen.getByLabelText(/Project or item/)).toHaveValue('14oz Green Insulated Pilsner Tumbler');
  expect(screen.getAllByRole('link', { name: '386-405-3424' })[0]).toHaveAttribute('href', 'tel:+13864053424');
  expect(screen.getByRole('link', { name: 'spacedad63@icloud.com' })).toHaveAttribute('href', 'mailto:spacedad63@icloud.com');
});

test('invalid product and page links show a recovery route', () => {
  window.history.replaceState({}, '', '/product/999999');
  const view = render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /product isn’t available/ })).toBeInTheDocument();
  view.unmount();
  window.history.replaceState({}, '', '/missing-page');
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /couldn’t find that page/ })).toBeInTheDocument();
});

test('a quote prepares an email without claiming to send it and refreshes after edits', () => {
  window.history.replaceState({}, '', '/contact');
  render(<App />);
  fireEvent.change(screen.getByLabelText(/Your name/), { target: { value: 'Avery & Co' } });
  fireEvent.change(screen.getByLabelText(/Email address/), { target: { value: 'avery@example.test' } });
  fireEvent.change(screen.getByLabelText(/Project or item/), { target: { value: 'Green tumblers' } });
  fireEvent.change(screen.getByLabelText(/Engraving text/), { target: { value: 'J & M + a logo' } });
  fireEvent.click(screen.getByRole('button', { name: /Prepare email request/ }));
  expect(screen.getByText(/Nothing has been sent yet/)).toBeInTheDocument();
  const email = new URL(screen.getByRole('link', { name: /Open email app/ }).href);
  expect(email.protocol).toBe('mailto:');
  expect(email.pathname).toBe('spacedad63@icloud.com');
  expect(email.searchParams.get('body')).toContain('J & M + a logo');
  fireEvent.change(screen.getByLabelText(/Project or item/), { target: { value: 'Name plates' } });
  expect(screen.queryByRole('link', { name: /Open email app/ })).not.toBeInTheDocument();
});

test('blank required text cannot prepare a quote', () => {
  window.history.replaceState({}, '', '/contact');
  render(<App />);
  fireEvent.change(screen.getByLabelText(/Your name/), { target: { value: '   ' } });
  fireEvent.submit(screen.getByRole('button', { name: /Prepare email request/ }).closest('form'));
  expect(screen.getByLabelText(/Your name/)).toBeInvalid();
  expect(screen.queryByRole('link', { name: /Open email app/ })).not.toBeInTheDocument();
});

test('email encoding keeps customer text out of mail headers', () => {
  const url = new URL(quoteMailto({ name: 'A & B', email: 'test@example.test', phone: '', item: 'Café + gifts?', quantity: '2', details: 'Line one\n&subject=changed', date: '' }));
  expect(url.searchParams.get('subject')).toBe('Custom engraving quote request');
  expect(url.searchParams.get('body')).toContain('Café + gifts?');
  expect(url.searchParams.get('body')).toContain('&subject=changed');
});

test('GitHub Pages product links survive navigation and a fresh page load', () => {
  process.env.REACT_APP_ROUTER = 'hash';
  window.history.replaceState({}, '', '/OrmondCustomEngraving/#/product/35');
  const view = render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('14oz Green Insulated Pilsner Tumbler');
  fireEvent.click(screen.getByRole('link', { name: /Request a quote for this item/ }));
  expect(window.location.pathname).toBe('/OrmondCustomEngraving/');
  expect(window.location.hash).toBe('#/contact?product=35');
  view.unmount();
  render(<App />);
  expect(screen.getByLabelText(/Project or item/)).toHaveValue('14oz Green Insulated Pilsner Tumbler');
});

test('the skip link focuses content without changing the Pages route', () => {
  process.env.REACT_APP_ROUTER = 'hash';
  window.history.replaceState({}, '', '/OrmondCustomEngraving/#/contact');
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: 'Skip to content' }));
  expect(screen.getByRole('main')).toHaveFocus();
  expect(window.location.hash).toBe('#/contact');
  expect(screen.getByRole('heading', { level: 1, name: 'Request a quote.' })).toBeInTheDocument();
});
