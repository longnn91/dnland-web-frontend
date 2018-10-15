import loginReducer from './accountReducer';
import mangReducer from './mangReducer';
import toggleReducer from './toggleReducer';
import {combineReducers} from 'redux';

var reducer = combineReducers({
  isLogin: loginReducer,
  mang: mangReducer,
  isAdding: toggleReducer
})

module.exports = reducer;
