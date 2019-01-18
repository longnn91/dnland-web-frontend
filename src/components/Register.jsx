import React, { Component } from 'react';
import { register } from 'actions/userAction';

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value, error: null});
  }

  handleSubmit(e) {
    e.preventDefault();
      const { username, email, password, confirmPassword } = this.state;
      register(this.state).then((response) => {
        this.props.history.push('/register-success');
      }).catch((error) => {
        this.setState({error: error.message})
      });
  }

  render(){
    const { username, email, password, confirmPassword, error } = this.state;
    let passwordNotMathError = password && confirmPassword && password !== confirmPassword;
    let disableSubmit = passwordNotMathError || !username || !email || !password;
    return (
      <div className="register">
          <form onSubmit={this.handleSubmit}>
            <div className="form__main">
                <input type="text" className="input input--sm mgb-20" placeholder="Username" name="username" value={username} onChange={this.handleChange} />
                <input type="text" className="input input--sm mgb-20" placeholder="Email" name="email" value={email} onChange={this.handleChange} />
                <input type="password" className="input input--sm mgb-20" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
                <input type="password" className="input input--sm" placeholder="Confirm password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} />
                { passwordNotMathError && <label className="form__error error">Password does not match together!</label>}
                <label className="form__error error">{error}</label>
                <input type="submit" disabled={disableSubmit} className="form__submit btn btn--green btn--md mgt-20" value="REGISTER" />
            </div>
          </form>
      </div>
    )
  }
}
