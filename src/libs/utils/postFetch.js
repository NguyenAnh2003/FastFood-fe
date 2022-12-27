import axiosClient from './axiosClient';

const postFetch = async (url, params = {}) => {
  const res = await axiosClient.post(url, params);
  return res.status;
};

export default postFetch;
