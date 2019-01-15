import React, {Component} from 'react';
import { ProductItem } from 'components';

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
                    <ProductItem key={index} data={index} />
                  )
                })
              }
          </div>
          <div className="product-section__banner"></div>
      </section>
    );
  }
}
