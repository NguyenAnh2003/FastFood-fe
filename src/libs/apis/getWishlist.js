import { getFetch } from '../utils';

const getWishList = (userId) => {
  const rs = getFetch(`wishlist/${userId}`);
  return rs;
};

export default getWishList;
