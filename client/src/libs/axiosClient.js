import axios from 'axios';
import queryString from 'query-string';
const axiosClient = axios.create({
  baseURL: 'http://localhost:8888/api/',
  headers: { 'content-type': 'application/json' },
  paramsSerializer: (params) =>
    queryString.stringify(params),
});

axiosClient.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return res.data;
    }
    return res;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
