import getFetch from '../utils/getFetch';

export const getProducts = () => {
  const res = getFetch('products');
  return res;
};

export const getSpecialFood = () => {
  const res = getFetch('products/special');
  return res;
};
