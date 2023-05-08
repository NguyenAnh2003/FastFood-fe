import { axiosClient, putFetch } from '../utils';

const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : {};

const updateFeature = (name, email, address) => {
  // const res = putFetch('user/update', {
  //   name,
  //   email,
  //   address,
  // });
  const res = axiosClient.put('user/update', {
    name, email, address, Headers: {
      authorization: `Bearer ${userInfo.token}`
    }
  })
    return res;
};

export default updateFeature;
