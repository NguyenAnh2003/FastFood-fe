import { putFetch } from '../utils';

const updateFeature = (name, email, address) => {
  const res = putFetch('user/profile', {
    name,
    email,
    address,
  });
  return res;
};

export default updateFeature;
