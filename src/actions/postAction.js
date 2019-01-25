import callAPI from '../apiCaller';

const CONFIG_HEADER = {
  'Content-Type': 'multipart/form-data',
  'Accept': 'application/json'
};

export const createPost = (data) => {
  let formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append([key], data[key]);
  });

  return callAPI('post', 'POST', formData, CONFIG_HEADER);
}
