import axiosClient from './axiosClient';

const putFetch = async (url, params = {}) => {
  try {
    const res = await axiosClient.put(url, params);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default putFetch;
