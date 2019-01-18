import React, { Component } from 'react';
import { login } from 'actions/authAction';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

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
        login({username, password, type: 'origin'}, this.props.history).catch(err => {
          if (err.response && err.response.status === 403) {
              this.setState({ error: err.response.data.msg });
          }
        });
      }
  }

  responseFacebook = response => {
    let loginParams = {
      type: 'facebook',
      name: response.name,
      username: response.userID,
      email: response.email,
      token: response.accessToken,
    }
    login(loginParams, this.props.history).catch(err => {
      if (err.response && err.response.status === 403) {
          this.setState({ error: err.response.data.msg });
      }
    });
  };

  responseGoogle = response => {
    console.log(response);
    if (response && response.profileObj) {
      let loginParams = {
        type: 'google',
        name: response.profileObj.name,
        username: response.profileObj.googleId,
        email: response.profileObj.email,
        token: response.accessToken,
      }
      login(loginParams, this.props.history).catch(err => {
        if (err.response && err.response.status === 403) {
            this.setState({ error: err.response.data.msg });
        }
      });
    } else {
      console.log('Login get error!');
    }
  };

  render() {
    const { username, password, error } = this.state;
    const disabled = !username || !password || error;
    return (
      <div className="form">
          <form onSubmit={this.handleSubmit}>
              <div className="form__main">
                  <input type="text" className="input input--sm mgb-20" placeholder="Email..." name="username" value={username} onChange={this.handleChange} />
                  <input type="password" className="input input--sm" placeholder="Password..." name="password" value={password} onChange={this.handleChange} />
                  <label className="form__error error">{error}</label>
                  <input type="submit" className="form__submit btn btn--green btn--md mgt-10 mgb-20" value="LOGIN" disabled={disabled} />
              </div>
          </form>
          <p className="form__notice-text">OR</p>
          <div className="form__facebook">
              <FacebookLogin
                appId="322579365133877"
                autoLoad={false}
                fields="name,email,picture"
                callback={this.responseFacebook}
              />
          </div>
          <div className="form__google">
              <GoogleLogin
                clientId="1001066386274-2h71fhggr4p7jg0gfnm23f8s1u5ebqop.apps.googleusercontent.com"
                buttonText="Google Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
              />
          </div>
      </div>
    )
  }
}
