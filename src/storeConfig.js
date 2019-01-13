import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

var store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log('Changed:', store.getState()));
module.exports = store;
