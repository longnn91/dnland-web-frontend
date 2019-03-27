import React, {Component} from 'react';
import {toastr} from 'react-redux-toastr'
import { createPost } from 'actions/postAction';

const ImageSlider = ({images, handleClose, moveItem}) => {
  const listImage = [];
  const startDrag = (event, index) => {
    event.dataTransfer.setData('id', index);
  };
  const allowDrag = (event) => {
    event.preventDefault();
  };
  images.map((item, key) => {
    let src = URL.createObjectURL(item);
    listImage.push(
      <div className="image-slider__item" key={key}>
          <span className="image-slider__item__close-btn" onClick={() => handleClose(key)}>&times;</span>
          <img
              draggable
              onDragStart={(e) => startDrag(e, key)}
              onDragOver={allowDrag}
              onDrop={(e) => moveItem(e, key)}
              className="image-slider__item__img"
              src={src}
          />
      </div>)
    });
    listImage ? listImage.push(<label htmlFor="upload-image" key={images.length} className="image-slider__plus-btn">&#43;</label>) : null;
  return <div className="image-slider mgb-20"> {listImage} </div>
}

export default class CreatePostPage extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.wrapImage = this.wrapImage.bind(this);
    this.state = {
      phone: '',
      description: '',
      skip: false,
      images: []
    }
  }

  wrapImage(event, id) {
    let moveIndex = event.dataTransfer.getData('id');
    let dragElement = this.state.images[moveIndex];
    this.state.images[moveIndex] = this.state.images[id];
    this.state.images[id] = dragElement;
    this.setState({images: this.state.images});
  };

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

  uploadImage(e) {
    e.preventDefault();
    createPost(this.state).then((response) => {
      // this.props.history.push('/product');
      toastr.success('The title', response.data.message);
    }).catch((error) => {
      this.setState({error: error.message})
    });
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
    const {phone, skip, description} = this.state;
    return (
      <div className="product-section">
          <form className="form product-section__main-area" onSubmit={this.uploadImage}>
              <h3 className="text mgb-50">Create new post</h3>
              { !skip &&
                  <div className="form__main">
                      <p className="form__input-label">Please input your phone number</p>
                      <div className="form__group">
                          <input className="input mgr-30" type="text" name="phone" value={phone} onChange={this.handleChange}/>
                          <button className="form__btn btn btn--green mgt-20" onClick={this.next}>NEXT</button>
                      </div>
                  </div>
              }
              { skip &&
                <div className="form__main">
                    <p className="form__input-label mgb-20">
                        <span className="text text--md text--black mgr-10">Phone: </span>
                        <span className="text text--md mgr-20">{phone}</span>
                        <span className="btn btn--gray" onClick={this.back}>EDIT</span>
                    </p>
                    <p className="form__input-label mgb-10">Please fill post's description in here!</p>
                    <textarea name="description" value={description} onChange={this.handleChange} className="textarea textarea--md mgb-20"></textarea>
                    <div className={`form__upload-img mgb-20 ${this.state.images.length > 0 ? 'hidden' : ''}`}>
                        <label className="form__upload-img__label" htmlFor="upload-image">Upload image</label>
                        <input type="file" id="upload-image" className="form__upload-img__btn" name="images" onChange={this.handleUploadImage} accept="image/*" multiple />
                    </div>
                    { this.state.images.length > 0 &&
                      <ImageSlider images={this.state.images} moveItem={this.wrapImage} handleClose={this.removeImage}></ImageSlider>
                    }
                    <div className="form__group  mgb-50">
                        <input type="button" onClick={this.back} value="BACK" className="form__btn btn btn--gray mgr-30" />
                        <input type="submit" value="POST" className="form__btn btn btn--green" />
                    </div>
                </div>
              }
          </form>
          <div className="product-section__banner"></div>
      </div>
    )
  }
}
