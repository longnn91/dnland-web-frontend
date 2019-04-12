import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import { API_SERVER } from 'constants/config';

export default class ProductItem extends Component {
  constructor() {
    super();
    this.closeAndShow = this.closeAndShow.bind(this);
    this.state = {
      showDetail: false
    }
  }

  closeAndShow() {
    this.setState({showDetail: !this.state.showDetail});
  }

  render() {
    const { order, data } = this.props;
    const imagesURL = data.images.map(item => `${API_SERVER}/${data.location}/${item}`);
    const countImage = imagesURL.length;
    const firstImageURL = countImage > 0 ? imagesURL[0] : null;
    const itemThumbnailStyle = {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundImage: `url(${firstImageURL})`
    }
    return (
      <div className="product">
          <div className="product__basic">
                <div className="product__header" style={itemThumbnailStyle}></div>
                <div className="product__content">
                    <div className="product__content__item">
                        <span className="icon-home mgr-5"></span>
                        <span>30 M<sup>2</sup></span>
                        <span className="cl-gray"> | 2 hours ago </span>
                      </div>
                    <div className="product__content__item">
                        <span className="icon-coin-dollar mgr-5"></span>
                        <span className="cl-red mgr-10">30$</span>
                    </div>
                    <div className="product__content__item">
                      <span className="icon-location mgr-5"></span>
                      <span>Đà Nẵng - Quận Hải Châu - Phường Hòa Cường Bắc</span>
                    </div>
                    <div className="product__content__item">
                      <span className="icon-bookmarks mgr-5"></span>
                      <span>Mọi thể loại</span>
                    </div>
                </div>
                <div className="product__control">
                    <div className="product__control__top">
                        <span className="icon-heart fz-18 cursor-pointer mgr-5"></span>
                    </div>
                    <div className="product__call-btn">
                        <span className="icon-phone icon--white fz-12"></span>
                        <span className="mgl-5">Call now</span>
                    </div>
                    <span className="product__detail-btn" onClick={this.closeAndShow}>{this.state.showDetail ? 'CLOSE' : 'SEE MORE'}</span>
                </div>
            </div>
      </div>
    )
  }
}
