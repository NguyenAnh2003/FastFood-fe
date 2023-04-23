import axiosClient from './axiosClient';

const postFetch = async (url, params = {}) => {
  try {
    const res = await axiosClient.post(url, params);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default postFetch;
