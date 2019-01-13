import { productType } from 'constants/actionTypes';

const productReducer = (state = [], action) => {
  switch (action.type) {
    case productType.GET_PRODUCTS_LIST:
      return [...action.productList]
    default:
    return [...state];
  }
}

export default productReducer;
