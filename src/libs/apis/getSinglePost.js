import getFetch from '../utils/getFetch';

const getSinglePost = (postId) => {
  const res = getFetch(`posts/${postId}`);
  return res;
};

export default getSinglePost;
