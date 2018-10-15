const mangReducer = (state = ['SHEN', 'NGOC', 'LONG'], action) => {
  switch (action.type) {
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

module.exports = mangReducer
