import axios from 'axios';

const API_URL = 'https://5bd6bf7aa6871d00133233e5.mockapi.io/';
const REQUEST_HEADER = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};
axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(function (config) {
  // config.headers.Authorization = `Bearer`;
  // Object.assign(config.headers, REQUEST_HEADER);
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    const statusCode = error;
    console.log(`Show status code from interceptors: ${statusCode}`);
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
    data: null
  }).catch(err => {
    console.log(err);
  })
}

export default callAPI;
