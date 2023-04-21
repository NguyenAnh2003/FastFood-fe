import getFetch from '../utils/getFetch';

export const getProducts = () => {
  const res = getFetch('products');
  return res;
};

export const getSpecialFood = () => {
  const res = getFetch('products/special');
  return res;
};

export const getProductsByCategory = (category) => {
  const res = getFetch(`products?category=${category}`);
  return res;
};
