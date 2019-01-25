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
      register(this.state).then(() => {
        this.props.history.push('/register-success');
      }).catch((error) => {
        this.setState({error: error.message})
      });
  }

  render(){
    const { username, email, password, confirmPassword, error } = this.state;
    let passwordNotMathError = password && confirmPassword && password !== confirmPassword;
    let disableSubmit = passwordNotMathError;
    return (
      <div className="main main--center">
          <section className="section-login form">
            <form className="form__login form--vertical" onSubmit={this.handleSubmit}>
              <div className="form__header">
                <span className="form__header__title">Register Form</span>
                <span className="form__header__close-button"></span>
              </div>
              <div className="form__main">
                <p className="form__input-label">Username</p>
                <input type="text" className="form__input" placeholder="Please input name" name="username" value={username} onChange={this.handleChange} />
                <p className="form__input-label">Email</p>
                <input type="text" className="form__input" placeholder="Please input email" name="email" value={email} onChange={this.handleChange} />
                <p className="form__input-label">Password</p>
                <input type="password" className="form__input fz-18" placeholder="Please input password" name="password" value={password} onChange={this.handleChange} />
                <p className="form__input-label">Confirm password</p>
                <input type="password" className="form__input fz-18" placeholder="Please input confirm password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} />
                { passwordNotMathError && <label className="form__error">Password does not match together!</label>}
                <label className="form__error">{error}</label>
                <button disabled={disableSubmit ? 'disabled' : ''} className="form__button mgt-10">
                  <i className="fa fa-spinner fa-spin fz-20"></i> Register
                </button>
              </div>
            </form>
          </section>
      </div>
    )
  }
}
