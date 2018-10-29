import loginReducer from './accountReducer';
import mangReducer from './mangReducer';
import toggleReducer from './toggleReducer';
import productReducer from './productReducer';
import {combineReducers} from 'redux';

var reducer = combineReducers({
  isLogin: loginReducer,
  mang: mangReducer,
  isAdding: toggleReducer,
  product: productReducer
})

module.exports = reducer;
