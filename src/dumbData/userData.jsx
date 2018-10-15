import axios from 'axios';

var userData = ['AAA', 'CCC'];

axios.get('https://jsonplaceholder.typicode.com/users')
.then(res => {
  if (res && res.data) {
    userData = [];
    res.data.map((e) => {
      userData.push(e.name);
    });
  }
});

module.exports = userData;
