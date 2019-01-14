import React, {Component} from 'react';
import { ProductItem } from 'components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ProductPage extends Component {

  render() {
    let arrayTemp = new Array(8).fill(true);
    return(
      <section className="product-section">
          <div className="product-section__list">
              <div className="product-section__search">
                  <form className="product-section__search__form" action="#">
                      <input className="input product-section__search__input" type="text" name="keyword" />
                      <select className="select product-section__search__select">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                      <input className="btn btn--green product-section__search__submit" type="submit" value="SEARCH" />
                  </form>
              </div>
              {
                arrayTemp.map((item, index) => {
                  return (
                    <ReactCSSTransitionGroup
                      transitionName="example"
                      transitionEnterTimeout={1000}
                      transitionLeaveTimeout={1000}>
                        <ProductItem key={index} data={index} />
                    </ReactCSSTransitionGroup>
                  )
                })
              }
          </div>
          <div className="product-section__banner"></div>
      </section>
    );
  }
}
