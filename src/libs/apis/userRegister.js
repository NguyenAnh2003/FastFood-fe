import { postFetch } from '../utils';

const registerFeature = (
  name,
  email,
  password,
  address
) => {
  const res = postFetch('user/signup', {
    name,
    email,
    password,
    address,
  });
  return res;
};

export default registerFeature;
