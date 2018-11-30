import { productType } from 'constants/actionTypes';
import callAPI from '../apiCaller';

const _getProductList = (productList) => {
  return {
    type: productType.GET_PRODUCTS_LIST,
    productList
  }
}

export const getProductList = () => {
  return dispatch => {
    return callAPI('users/list', 'GET').then( res => {
      dispatch(_getProductList(res.data.userList));
    });
  }
}
