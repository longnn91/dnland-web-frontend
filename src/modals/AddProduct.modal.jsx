import React, { Component } from 'react';
import Modal from 'react-modal';
import { removeToken } from 'actions/authAction';
import { browserHistory } from 'react-router-dom';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : 'white',
    border                : '1px solid #b1b1b1',
    padding               : '0',
    borderRadius          :  '8px',
  },
  overlay: {
    backgroundColor       :  'rgba(255, 255, 255, 0.8)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default class AddProductModal extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      phone: '',
      skip: false
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(
      { [name]: value }
    );
  }

  back(e) {
    e.preventDefault();
    this.setState({ skip: false });
  }

  next(e) {
    e.preventDefault();
    if (this.state.phone) {
      this.setState({ skip: true });
    }
  }

  render() {
    const {phone, skip} = this.state;
    return (
        <Modal
          isOpen={this.props.isOpenModal}
          onRequestClose={this.props.openModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal modal--large">
              <div className="modal__header">
                  <h2 className="modal__title">Create new post</h2>
                  <div className="modal__close-btn" onClick={this.props.openModal}>&times;</div>
              </div>
              <div className="modal__main modal__main--white modal_main--center">
                  <form className="form">
                      { !skip &&
                          <div className="form__main form__main--left">
                              <p className="form__input-label">Please input your phone number</p>
                              <div className="form__group">
                                  <input className="input mgr-30" type="text" name="phone" value={phone} onChange={this.handleChange}/>
                                  <button className="form__btn btn btn--green mgt-20" onClick={this.next}>NEXT</button>
                              </div>
                          </div>
                      }
                      { skip &&
                        <div className="form__main form__main--left">
                            <p className="form__input-label mgb-20">
                                <span className="text text--md text--black mgr-10">Phone: </span>
                                <span className="text text--md mgr-20">{phone}</span>
                                <span class="btn btn--gray" onClick={this.back}>EDIT</span>
                            </p>
                            <p className="form__input-label mgb-10">Please fill post's description in here!</p>
                            <textarea className="textarea textarea--md mgb-20"></textarea>
                            <input type="submit" value="POST" className="btn btn--green" />
                        </div>
                      }
                  </form>
              </div>
          </div>
      </Modal>
    )
  }
}
