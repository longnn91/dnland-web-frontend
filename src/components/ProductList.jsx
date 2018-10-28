import React, {Component} from 'react';

export default class ProductList extends Component {

  render() {
    return(
      <table className="product-page__main__table table">
        <thead>
          <tr>
            <td>No.</td>
            <td>Code</td>
            <td>Name</td>
            <td>Price</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>001</td>
              <td>C01</td>
              <td>ITEM 01</td>
              <td>15</td>
              <td>Ready</td>
              <td>
                <button className="button table__button">EDIT</button>
                <button className="button button--danger table__button">DELETE</button>
              </td>
            </tr>
        </tbody>
      </table>
    );
  }
}
