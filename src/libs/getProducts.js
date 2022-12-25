import axiosClient from './axiosClient';

export const getProducts = async () => {
  try {
    const res = await axiosClient.get('/products');
    return res.data
  } catch (error) {
    alert(error.message);
  }
};
