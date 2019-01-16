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
    return (
      <div className="main main--center">
      </div>
    )
  }
}
