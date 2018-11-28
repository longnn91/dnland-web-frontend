import axios from 'axios';

const API_URL = 'http://localhost:3000';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmY3YjAxYjY5NWMzZDNiZTNmYWY1YTkiLCJuYW1lIjoic2hlbiIsImVtYWlsIjoic2hlbmxvbmcxOTkxQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoic2hlbmxvbmciLCJwYXNzd29yZCI6IiQyYSQxMCQvY0xvU3NHSVpFd0l3bjEvYy9GVnVldS9EdjBrUDd5SERZdTJXM0JpWTlBRXBTYU8vOUg1aSIsIl9fdiI6MCwiaWF0IjoxNTQzMTk4ODEzLCJleHAiOjE1NDM4MDQ2MTN9.4LVyfihkm_bQP7MOoJKFhTNor-W4dP1xOwd9KRhGF8Q';
const REQUEST_HEADER = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};
axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `bearer ${TOKEN}`;
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
    data: data
  }).catch(err => {
    console.log(err);
  })
}

export default callAPI;
