const toggleReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_ADDING':
      return {...state, isAdding: !state.isAdding}
      break;
    default:
    return state;
  }
}

module.exports = toggleReducer
