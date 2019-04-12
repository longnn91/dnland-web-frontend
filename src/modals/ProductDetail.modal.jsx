import React, { Component } from 'react';
import Modal from 'react-modal';
import { browserHistory } from 'react-router-dom';
import history from '../history';

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

export default class ProductDetailModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, imagesURL, order } = this.props;
    const countImage = imagesURL.length;
    return (
        <Modal
          isOpen={this.props.isOpenModal}
          onRequestClose={this.props.openModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal modal--medium">
              <div className="modal__header">
                  <h2 className="modal__title">Logout</h2>
                  <div className="modal__close-btn" onClick={this.props.openModal}>&times;</div>
              </div>
              <div className="modal__main modal_main--center product">
                  <div className="product__detail">
                      <div className="product__detail__galaxy galaxy">
                          <div className="galaxy__img srollable">
                              {
                                imagesURL.map((item, index) => {
                                  return <input type="radio" name={`images${order}`} id={`radio${index}and${order}`} key={index} defaultChecked/>
                                })
                              }
                              {
                                imagesURL.map((item, index) => {
                                    let pre = index <= 0 ? countImage - 1 : index - 1;
                                    let next = index >= countImage - 1 ? 0 : index + 1;
                                  return (
                                    <div className="galaxy__img__item" id={`img${index}and${order}`} key={index}>
                                        <img src={item} alt=""/>
                                        <label className="galaxy__img__pre" htmlFor={`radio${pre}and${order}`}>&#8592;</label>
                                        <label className="galaxy__img__next" htmlFor={`radio${next}and${order}`}>&#8594;</label>
                                    </div>
                                  )
                                })
                              }
                              <div className="galaxy__nav">
                                  {
                                    imagesURL.map((item, index) => {
                                      return <label key={index} className="galaxy__nav__tick" htmlFor={`radio${index}and${order}`} id={`tick${index}and${order}`}></label>
                                    })
                                  }
                              </div>
                          </div>
                          <div className="galaxy__tool"></div>
                      </div>
                      <div className="product__detail__info">
                        <p>{data.description}</p>
                      </div>
                  </div>
              </div>
          </div>
      </Modal>
    )
  }
}
