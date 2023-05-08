import {  putFetch } from '../utils';

const updateFeature = (name, email, address) => {
  const res = putFetch('user/update', {
    name,
    email,
    address,
  });
  return res;
};

export default updateFeature;
