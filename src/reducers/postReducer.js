import { postType } from 'constants/actionTypes';

const postReducer = (state = [], action) => {
  switch (action.type) {
    case postType.GET_POST_LIST:
      return action.postList;
    default:
      return state;
  }
}

module.exports = postReducer
