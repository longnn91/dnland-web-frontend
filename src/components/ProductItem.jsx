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
    console.log(data);
    const imagesURL = data.images.map(item => `${API_SERVER}/${data.location}/${item}`);
    const countImage = imagesURL.length;
    const firstImageURL = countImage > 0 ? imagesURL[0] : null;
    return (
      <div className="product">
          { !this.state.showDetail &&
            <div className="product__basic">
                <div className="product__header">
                    <img className="product__thumb" src={firstImageURL} alt="" align="middle" />
                </div>
                <div className="product__content">
                    <div className="mgl-50 fz-20">Place</div>
                    <div className="product__price">
                        <span>Acreage</span>
                        <span>30 M<sup>2</sup></span>
                      </div>
                    <div className="product__price">30$</div>
                    <div className="product__price">New york</div>
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
          <span className="product__button btn btn--gray" onClick={this.closeAndShow}>{this.state.showDetail ? 'CLOSE' : 'SEE MORE'}</span>
      </div>
    )
  }
}
