import callAPI from '../apiCaller';
import { postType } from 'constants/actionTypes';

const CONFIG_HEADER = {
  'Content-Type': 'multipart/form-data',
  'Accept': 'application/json'
};

export const createPost = (data) => {
  let formData = new FormData();
  Object.keys(data).forEach(key => {
    if (Array.isArray(data[key])) {
        data[key].forEach((item, index) => {
          formData.append("images", item);
        });
    } else {
      formData.append([key], data[key]);
    }
  });

  return callAPI('post', 'POST', formData, CONFIG_HEADER);
}

const _getPostList = (postList) => {
  return {
    type: postType.GET_POST_LIST,
    postList
  }
}

export const getPostList = () => {
  return dispatch => {
    return callAPI('post', 'GET').then( res => {
      dispatch(_getPostList(res.data.PostList));
    });
  }
}
