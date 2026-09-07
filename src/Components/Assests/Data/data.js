import allProducts from './all_product';

// Featured cards use the same records and IDs as their detail pages.
const featuredIds = [35, 61];
export default featuredIds.map(id => allProducts.find(product => product.id === id));
