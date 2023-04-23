import getFetch from '../utils/getFetch';

const getSingleProduct = (productId) => {
  const res = getFetch(`products/${productId}`);
  return res;
};

export default getSingleProduct;
