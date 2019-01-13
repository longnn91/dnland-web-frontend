import React, { Component } from 'react';
import Modal from 'react-modal';
import { removeToken } from 'actions/authAction';
import { browserHistory } from 'react-router-dom';
import history from '../history';

const customStyles = {
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : 'white',
    border                : 'none',
    padding               : '0',
    borderRadius          :  '8px'
  },
  overlay: {
    backgroundColor       :  'rgba(255, 255, 255, 0.15)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default class LogoutModal extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    removeToken();
    this.props.openModal();
    history.push('/login');
  }

  render() {
    return (
        <Modal
          isOpen={this.props.isOpenModal}
          onRequestClose={this.props.openModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal modal--small">
              <div className="modal__header">
                  <h2 className="modal__title">Logout</h2>
                  <div className="modal__close-btn" onClick={this.props.openModal}>&times;</div>
              </div>
              <div className="modal__main modal_main--center">
                  <h3 className="modal__text text-center">Do you want to logout?</h3>
                  <div className="modal__group-btn mgt-40">
                      <button onClick={this.logout} className="button button--green button--medium mgr-10">Logout</button>
                      <button onClick={this.props.openModal} className="button button--gray button--medium mgl-10">Cancel</button>
                  </div>
              </div>
          </div>
      </Modal>
    )
  }
}
