import axios from 'axios';

var userData = ['AAA', 'CCC'];

// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(res => {
//     if (res && res.data) {
//       userData = [];
//       res.data.map((e) => {
//         userData.push(e.name);
//       });
//     }
//     console.log(userData);
//     return userData;
//   });
//
// let arrayData = [1, 2, 3];
//
// let newArray = arrayData.map(e =>
//   e*2
// )

// let getFunction = (num) => {
//   if (num > 0) {
//     return () => console.log('so duong')
//   } else {
//     return () => console.log('so am')
//   }
// }
//
// getFunction(5)();

// console.log(newArray);

const mangReducer = (state = userData, action) => {
  // console.log('Reducer done...');
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item];
      break;
    case 'REMOVE_ITEM':
      return state.filter((e, i) => i != action.index);
      break;
    default:
    return state;
  }
}

module.exports = mangReducer
