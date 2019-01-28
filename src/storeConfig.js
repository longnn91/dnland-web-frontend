import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { initTranslationWithStore } from 'utils/translations';

var store = createStore(reducer, applyMiddleware(thunk));
initTranslationWithStore(store);
store.subscribe(() => console.log('Changed:', store.getState()));
module.exports = store;
