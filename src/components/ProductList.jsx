import React, {Component} from 'react';
import { connect } from 'react-redux';
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
    this.state = {
      product: []
    }
  }

  componentDidMount() {
    callAPI('users/list', 'GET').then(res => {
      console.log(res);
      this.state.product = [...res.data.userList];
      this.setState(this.state);
    })
  }

  render() {
    var { product } = this.state;
    console.log('asdasd', this.state);
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

export default connect(mapStateToProps, null)(ProductList);
