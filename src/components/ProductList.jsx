import React, {Component} from 'react';
import { connect } from 'react-redux';
import callAPI from '../apiCaller';

class ProductItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.code}</td>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
        <td>{this.props.status ? 'Available' : 'Not Available'}</td>
        <td>
          <button className="button table__button">EDIT</button>
          <button className="button button--danger table__button">DELETE</button>
        </td>
      </tr>
    )
  }
}

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    }
  }

  componentDidMount() {
    callAPI('product', 'GET').then(res => {
      this.setState({
        product: res.data
      });
    })
  }

  render() {
    var { product } = this.state;
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
          {
            product.map((item, index) => {
              return (
                <ProductItem index={index} code={item.code} name={item.name} price={item.price} staus={item.status} />
              )
            })
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product
  }
}

export default connect(mapStateToProps, null)(ProductList);
