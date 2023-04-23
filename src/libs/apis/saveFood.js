import { postFetch } from '../utils';

const saveFoodAPI = async (product, userId) => {
  const res = postFetch('wishlist/save', {product, userId});
  return res;
};

export default saveFoodAPI;
