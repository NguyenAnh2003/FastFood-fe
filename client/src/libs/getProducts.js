import axios from 'axios';
import axiosClient from './axiosClient';
import { getFetch } from './fetch';

export const getProducts = async () => {
  const url = '/products';
  return axiosClient.get(url, {});
};
