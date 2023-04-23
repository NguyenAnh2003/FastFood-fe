import { postFetch } from '../utils';

const unsaveFoodAPI = async (product, userId) => {
  const res = postFetch('wishlist/unsave', {
    product,
    userId,
  });
  return res;
};

export default unsaveFoodAPI;
