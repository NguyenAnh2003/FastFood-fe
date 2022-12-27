import postFetch from '../utils/postFetch';

const loginFeature = (email, password) => {
  const res = postFetch('signin', { email, password });
  return res;
};

export default loginFeature;
