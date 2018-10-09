import {createStore} from 'redux';
import reducer from './reducers';

var store = createStore(reducer);
store.subscribe(() => console.log('Changed:', store.getState()));
module.exports = store;
