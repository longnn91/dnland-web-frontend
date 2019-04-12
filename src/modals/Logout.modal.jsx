import React, { Component } from 'react';
import { removeToken } from 'actions/authAction';
import history from '../history';

export default class LogoutModal extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    removeToken();
    history.push('/login');
  }

  render() {
    return (
      <div className="modal__main modal_main--center">
          <h3 className="modal__text text-center">Do you want to logout?</h3>
          <div className="modal__group-btn mgt-40">
              <button onClick={this.logout} className="btn btn--danger btn--md button--medium mgr-10">Logout</button>
              <button className="btn btn--gray btn--md button--medium mgl-10">Cancel</button>
          </div>
      </div>
    )
  }
}
