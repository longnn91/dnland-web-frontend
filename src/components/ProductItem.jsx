import React, {Component} from 'react';

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
    let key = this.props.data;
    return (
      <div className="product">
          { !this.state.showDetail &&
            <div className="product__basic">
                <div className="product__header">
                    <img className="product__thumb" src="img/img1" alt="" align="middle" />
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
          { this.state.showDetail &&
            <div className="product__detail">
                <div className="product__detail__galaxy galaxy">
                    <div className="galaxy__img placeholder">
                        <input type="radio" name={`images${key}`} id={`radio1and${key}`} defaultChecked/>
                        <input type="radio" name={`images${key}`} id={`radio2and${key}`}/>
                        <input type="radio" name={`images${key}`} id={`radio3and${key}`}/>
                        <div className="galaxy__img__item" id={`img1and${key}`}>
                            <img src="img/img1" alt=""/>
                            <label className="galaxy__img__pre" htmlFor={`radio3and${key}`}>&#8592;</label>
                            <label className="galaxy__img__next" htmlFor={`radio2and${key}`}>&#8594;</label>
                        </div>
                        <div className="galaxy__img__item" id={`img2and${key}`}>
                            <img src="img/img2" alt=""/>
                            <label className="galaxy__img__pre" htmlFor={`radio1and${key}`}>&#8592;</label>
                            <label className="galaxy__img__next" htmlFor={`radio3and${key}`}>&#8594;</label>
                        </div>
                        <div className="galaxy__img__item" id={`img3and${key}`}>
                            <img src="img/img3" alt=""/>
                            <label className="galaxy__img__pre" htmlFor={`radio2and${key}`}>&#8592;</label>
                            <label className="galaxy__img__next" htmlFor={`radio1and${key}`}>&#8594;</label>
                        </div>
                        <div className="galaxy__nav">
                            <label className="galaxy__nav__tick" htmlFor={`radio1and${key}`} id={`tick1and${key}`}></label>
                            <label className="galaxy__nav__tick" htmlFor={`radio2and${key}`} id={`tick2and${key}`}></label>
                            <label className="galaxy__nav__tick" htmlFor={`radio3and${key}`} id={`tick3and${key}`}></label>
                        </div>
                    </div>
                    <div className="galaxy__tool"></div>
                </div>
                <div className="product__detail__info"></div>
            </div>
          }
          <button className="product__button btn btn--gray" onClick={this.closeAndShow}>{this.state.showDetail ? 'BASIC' : 'DETAIL'}</button>
      </div>
    )
  }
}
