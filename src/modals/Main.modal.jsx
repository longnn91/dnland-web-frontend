import React, { Component } from 'react';
import Modal from 'react-modal';
import LogoutModal from './Logout.modal';
import ProductDetailModal from './ProductDetail.modal';
import { connect } from 'react-redux';

const customStyles = {
  content : {
    top                   : '300px',
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
    backgroundColor       :  'rgba(255, 255, 255, 0)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

class MainModal extends Component {
  constructor(props) {
    super(props);
    this.contentModal = {
      LOGOUT: LogoutModal,
      PRODUCT_DETAIL: ProductDetailModal
    };
  }

  render() {
    const { data } = this.props;
    let modalContent = null;
    const ContentModal = this.contentModal['LOGOUT'];

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
              <ContentModal></ContentModal>
          </div>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    openModal: () => {
      dispatch(getPostList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainModal)
