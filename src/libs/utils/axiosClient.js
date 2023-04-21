import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://localhost:8888/api/',
  
});

export default axiosClient;


