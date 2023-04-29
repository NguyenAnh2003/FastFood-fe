import axios from 'axios';

const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : {};

const axiosClient = axios.create({
  baseURL: 'https://localhost:8888/api/',
  headers: {
    authorization: `Bearer ${userInfo.token}`,
  },
  // withCredentials: true
});

export default axiosClient;
