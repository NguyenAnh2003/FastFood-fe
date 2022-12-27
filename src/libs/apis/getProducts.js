import getFetch from '../utils/getFetch';

export const getProducts = () => {
  
}

export const getSpecialFood = () => {
  const res = getFetch('products/new');
  return res;
};
