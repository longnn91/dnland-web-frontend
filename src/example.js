import {createStore} from 'redux';

var defaultState = {
  mang: ['Android', 'iOS', 'Java'],
  isAdding: false
}

var reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_ADDING':
      return {...state, isAdding: !state.isAdding}
      break;
    case 'ADD_ITEM':
      return {...state, mang: [...state.mang, action.item] }
      break;
    case 'REMOVE_ITEM':
      return {...state, mang: state.mang.filter((e, i) => i != action.index)}
      break;
    default:
    return state;
  }
}

var store = createStore(reducer);

console.log(store.getState());

store.dispatch({type: 'TOGGLE_IS_ADDING'});
store.dispatch({type: 'ADD_ITEM', item: 'Utity'});
store.dispatch({type: 'REMOVE_ITEM', index: 0});

console.log(store.getState());
