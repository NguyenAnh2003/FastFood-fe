import getFetch from '../utils/getFetch';

const getCategories = () => {
  const res = getFetch('categories');
  return res;
};

export default getCategories;
