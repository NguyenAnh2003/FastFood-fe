import { putFetch } from '../utils';

const updateFeature = (name, email, address) => {
  const userInfo = JSON.parse(
    localStorage.getItem('userInfo')
  );
  const accesstoken = userInfo?.accesstoken;
  const res = putFetch(
    'user/profile',
    { name, email, address },
    accesstoken
  );
  return res;
};

export default updateFeature;
