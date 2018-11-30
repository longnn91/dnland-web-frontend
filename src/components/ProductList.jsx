import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getProductList } from 'actions/productAction';
import callAPI from '../apiCaller';

class ProductItem extends Component {
  handleClick() {
    this.content.history.push('/login');
  }

  render() {
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.code}</td>
        <td>{this.props.name}</td>
        <td>{this.props.username}</td>
        <td>{this.props.email}</td>
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
    // this.state = {
    //   product: []
    // }
  }

  componentDidMount() {
    // callAPI('users/list', 'GET').then(res => {
    //   this.state.product = [...res.data.userList];
    //   this.setState(this.state);
    // })
    this.props.getProductList();
  }

  render() {
    var { product } = this.props;
    return(
      <table className="product-page__main__table table">
        <thead>
          <tr>
            <td>No.</td>
            <td>Code</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            product.map((item, index) => {
              return (
                <ProductItem key={index} index={index} code={item._id} name={item.name} username={item.username} email={item.email}/>
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    getProductList: () => {
      dispatch(getProductList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
