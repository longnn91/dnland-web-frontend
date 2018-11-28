import React, { Component } from 'react';
import callAPI from '../apiCaller';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setCookieToken(token) {
    let d = new Date();
    var minutes = 60;
    d.setTime(d.getTime() + (minutes*60*1000));

    cookies.set("token", token, {path: "/", expires: d});
  };

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
      const { username, password } = this.state;
      if (username && password) {
        callAPI('auth/login', 'POST', this.state).then(res => {
          if (res.status === 200 && res.data.token) {
            this.setCookieToken(res.data.token);
            this.props.history.push('/product');
          }
        })
      }
  }

  render(){
    const { username, password } = this.state;
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
              <input type="submit" className="form__button" />
            </form>
          </section>
      </div>
    )
  }
}
