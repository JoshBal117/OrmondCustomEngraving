import { business } from '../data/business';

export function quoteBody(fields) {
  return [
    'Hello Ormond Custom Engraving,',
    '',
    'I would like a quote for:',
    'Project / item: ' + fields.item.trim(),
    'Quantity: ' + fields.quantity,
    'Engraving text / design: ' + fields.details.trim(),
    'Preferred date: ' + (fields.date || 'Flexible / to discuss'),
    '',
    'Name: ' + fields.name.trim(),
    'Email: ' + fields.email.trim(),
    'Phone: ' + (fields.phone.trim() || 'Not provided'),
  ].join('\r\n');
}

export function quoteMailto(fields) {
  return 'mailto:' + business.email + '?subject=' + encodeURIComponent('Custom engraving quote request') + '&body=' + encodeURIComponent(quoteBody(fields));
}
