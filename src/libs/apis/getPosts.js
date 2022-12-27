import getFetch from '../utils/getFetch';

const getPosts = () => {
  const res = getFetch('posts');
  return res;
};

export default getPosts;
