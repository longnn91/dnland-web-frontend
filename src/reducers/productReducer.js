var inititalState = [
  {
    code: 'C01',
    name: 'ITEM 01',
    price: 300,
    status: true
  },
  {
    code: 'C02',
    name: 'ITEM 02',
    price: 600,
    status: false
  },
  {
    code: 'C03',
    name: 'ITEM 03',
    price: 900,
    status: true
  }
];

const productReducer = (state = inititalState, action) => {
  switch (action.type) {
    default:
    return [...state];
  }
}

export default productReducer;
