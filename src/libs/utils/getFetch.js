import axiosClient from './axiosClient';

const getFetch = async (url) => {
  try {
    const res = await axiosClient.get(url);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getFetch;
