const remove = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index: index
  }
}

const add = (item) => {
  return {
    type = 'ADD_ITEM',
    item: item
  }
}

const toggle = () => {
  return {
    type: 'TOGGLE_IS_ADDING'
  }
}

module.exports = { remove, add, toggle }
