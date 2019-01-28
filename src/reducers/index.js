import loginReducer from './accountReducer';
import mangReducer from './mangReducer';
import toggleReducer from './toggleReducer';
import productReducer from './productReducer';
import {combineReducers} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';

var reducer = combineReducers({
  isLogin: loginReducer,
  mang: mangReducer,
  isAdding: toggleReducer,
  product: productReducer,
  toastr: toastrReducer
})

module.exports = reducer;
