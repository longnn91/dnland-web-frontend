import axios from 'axios';
import { getToken } from 'actions/authAction';

const API_URL = 'http://localhost:3000';
const REQUEST_HEADER = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};
axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = getToken();
  Object.assign(config.headers, REQUEST_HEADER);
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    const statusCode = error;
    switch (statusCode) {
      case 401: break;
      case 403: break;
      case 404: break;
      case 500: break;
      default: break;
    }
    // Do something with response error
    return Promise.reject(error);
  });


const callAPI = (url, method, data) => {
  return axios({
    url: url,
    method: method,
    data: data
  })
}

export default callAPI;
