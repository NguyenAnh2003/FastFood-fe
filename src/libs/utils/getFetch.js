import axiosClient from './axiosClient';

const getFetch = async (url, params = {}) => {
  try {
    const res = await axiosClient.get(url, params);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getFetch;
