import loginReducer from './accountReducer';
import toggleReducer from './toggleReducer';
import productReducer from './productReducer';
import languageReducer from './languageReducer';
import postReducer from './postReducer';
import {combineReducers} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';

var reducer = combineReducers({
  isLogin: loginReducer,
  isAdding: toggleReducer,
  product: productReducer,
  post: postReducer,
  toastr: toastrReducer,
  i18n: languageReducer
})

module.exports = reducer;
