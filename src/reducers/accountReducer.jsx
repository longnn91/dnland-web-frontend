const accountList = [
  {
    username: 'shen',
    password: 'admin'
  },
  {
    username: 'longnguyen',
    password: 'admin'
  }
]

const loginReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN':
      accountList.forEach(account =>{
        if((account.username === action.username) && (account.password === action.password))
          state = true;
        }
      );
      return state;
      break;
    default:
      return state;
  }
}

module.exports = loginReducer;
