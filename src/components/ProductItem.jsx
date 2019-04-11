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
          { !this.state.showDetail &&
            <div className="product__basic">
                <div className="product__header" style={itemThumbnailStyle}></div>
                <div className="product__content">
                    <div className="product__content__item">
                        <span className="icon-home mgr-5"></span>
                        <span>30 M<sup>2</sup></span>
                      </div>
                    <div className="product__content__item">
                        <span className="icon-coin-dollar mgr-5"></span>
                        <span>30$</span>
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
                        <span className="icon-heart"></span>
                        <div className="product__share-face">
                            <span className="icon-facebook2"></span>
                        </div>
                        <div className="product__call-btn">
                            <span className="icon-phone icon--white icon--middle fz-16"></span>
                        </div>
                    </div>
                    <div className="product__control__bottom">
                        <div className="product__quick-btn mgr-10">Quick view</div>
                        <div className="product__detail-btn">Detail view</div>
                    </div>
                </div>
            </div>
          }
          <CSSTransition
            in={this.state.showDetail}
            timeout={600}
            classNames="message"
            unmountOnExit>
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
          </CSSTransition>
      </div>
    )
  }
}
