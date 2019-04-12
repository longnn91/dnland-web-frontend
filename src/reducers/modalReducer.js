import { modalType } from 'constants/actionTypes';

const initState = {
  data: null,
  isShow: false
}

const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case modalType.OPEN_MODAL:
      return { data: action.data, isShow: true }
      break;
    case modalType.CLOSE_MODAL:
      return { data: null, isShow: false }
      break;
    default:
      return state;
  }
}
