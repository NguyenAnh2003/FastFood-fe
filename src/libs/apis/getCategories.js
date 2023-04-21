import getFetch from '../utils/getFetch';

export const getCategories = () => {
  const res = getFetch('products/categories');
  return res;
};


