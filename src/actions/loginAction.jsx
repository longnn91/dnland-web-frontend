const login = (username, password) => {
  return {
      type: 'LOGIN',
      username,
      password
  }
}

module.exports = {login}
