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

const ImageSlider = ({images, handleClose}) => {
  const listImage = [];
  images.map((item, key) => {
    let src = URL.createObjectURL(item);
    listImage.push(
      <div className="image-slider__item" key={key}>
          <span className="image-slider__item__close-btn" onClick={() => handleClose(key)}>&times;</span>
          <img className="image-slider__item__img" src={src} />
      </div>)
    });
    listImage ? listImage.push(<label htmlFor="upload-image" key={images.length} className="image-slider__plus-btn">&#43;</label>) : null;
  return <div className="image-slider mgb-20"> {listImage} </div>
}

export default class AddProductModal extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.state = {
      phone: '',
      skip: false,
      images: []
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(
      { [name]: value }
    );
  }

  handleUploadImage(e) {
    let tempArr = [];
    if (e.target && e.target.files) {
      Object.keys(e.target.files).forEach(key => {
        tempArr.push(e.target.files[key]);
      });
    }
    this.setState({ images: [...this.state.images, ...tempArr] });
  }

  removeImage(key) {
    this.state.images.splice(key,1);
    this.setState({ images: this.state.images });
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
              <div className="modal__main modal__main--white modal_main--center srollable">
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
                                <span className="btn btn--gray" onClick={this.back}>EDIT</span>
                            </p>
                            <p className="form__input-label mgb-10">Please fill post's description in here!</p>
                            <textarea className="textarea textarea--md mgb-20"></textarea>
                            <div className={`form__upload-img mgb-20 ${this.state.images.length > 0 ? 'hidden' : ''}`}>
                                <label className="form__upload-img__label" htmlFor="upload-image">Upload image</label>
                                <input type="file" id="upload-image" className="form__upload-img__btn" name="images" onChange={this.handleUploadImage} accept="image/*" multiple />
                            </div>
                            { this.state.images.length > 0 &&
                              <ImageSlider images={this.state.images} handleClose={this.removeImage}></ImageSlider>
                            }
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
