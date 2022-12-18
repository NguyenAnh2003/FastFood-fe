import axios from 'axios';

export function getFetch(url, params = {}) {
  return axios({
    // baseURL: 'http://localhost:8888/api',
    url: url,
    method: 'GET',
    params: params,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err.message));
}
