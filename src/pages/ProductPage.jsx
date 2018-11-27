import React, {Component} from 'react';
import ProductList from 'components/ProductList';

export default class ProductPage extends Component {

  render() {
    return(
      <div className="product-page">
        <div className="product-page__header">
            <button>ADD ITEM</button>
        </div>
        <div className="product-page__main">
          <ProductList {...this.props} />
        </div>
      </div>
    );
  }
}
