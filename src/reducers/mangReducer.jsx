import {userData} from 'dumbData';

const mangReducer = (state = userData, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item];
      break;
    case 'REMOVE_ITEM':
      return state.filter((e, i) => i != action.index);
      break;
    default:
    return state;
  }
}

module.exports = mangReducer
