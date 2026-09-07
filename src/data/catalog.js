import allProducts from '../Components/Assests/Data/all_product';

export const categories = [
  { id: 'tumblers', title: 'Tumblers & drinkware', description: 'Names, logos, and personal touches for cups, mugs, and tumblers.' },
  { id: 'acrylics', title: 'Awards & acrylics', description: 'A personal way to recognize a milestone, thank a teammate, or celebrate an achievement.' },
  { id: 'leather', title: 'Leather & patches', description: 'Personalize patches, name tags, and leather gift items with your text or design.' },
  { id: 'wood', title: 'Wood gifts & engraving', description: 'Explore wood gifts and name plates, or ask about a custom engraving project.' },
  { id: 'metal', title: 'Metal gifts', description: 'Add a personal detail to a metal gift. Ask about material and design compatibility.' },
];

// Item 68 pairs an acrylic award title with a maple name plate image.
// Keep the original record, but leave it out of the preview until verified.
export const products = allProducts.filter(product => product.id !== 68);
export const findProduct = id => products.find(product => product.id === Number(id));
