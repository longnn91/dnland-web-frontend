import React, { Component } from 'react';
import callAPI from '../apiCaller';
import { login } from 'actions/authAction';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState(
      {[name]: value, error: null});
  }

  handleSubmit(e) {
    e.preventDefault();
      const { username, password } = this.state;
      if (username && password) {
        login({username, password}, this.props.history).catch(err => {
          if (err.response && err.response.status === 403) {
              this.setState({ error: err.response.data.msg });
          }
        });
      }
  }

  render(){
    const { username, password, error } = this.state;
    return (
      <div className="main main--center">
          <section className="section-login form">
            <form className="form__login form--vertical" onSubmit={this.handleSubmit}>
              <div className="form__header">
                <span className="form__header__title">Login form</span>
                <span className="form__header__close-button"></span>
              </div>
              <input type="text" className="form__input" placeholder="Email..." name="username" value={username} onChange={this.handleChange} />
              <input type="password" className="form__input" placeholder="Password..." name="password" value={password} onChange={this.handleChange} />
              <label className="form__error">{error}</label>
              <input type="submit" className="form__button" />
            </form>
          </section>
      </div>
    )
  }
}
