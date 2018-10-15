const toggleReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_ADDING':
      return !state;
      break;
    default:
    return state;
  }
}

module.exports = toggleReducer
