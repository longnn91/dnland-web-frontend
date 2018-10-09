import loginReducer from './accountReducer';
import {combineReducers} from 'redux';

var reducer = combineReducers({
  isLogin: loginReducer
})

module.exports = reducer;
