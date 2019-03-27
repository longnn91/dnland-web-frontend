import React, {Component} from 'react';
import { ProductItem } from 'components';
import Login from 'components/Login';
import { isAuth } from 'actions/authAction';
import { connect } from 'react-redux';
import { getPostList } from 'actions/postAction';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.createPost = this.createPost.bind(this);
    this.state = {
      openModal: false,
      openLogin: false
    };
  }

  openModal() {
  this.setState({openModal: !this.state.openModal});
  }

  createPost() {
    if (isAuth()) {
      this.props.history.push('/create-post');
    } else {
      this.setState({openLogin: !this.state.openLogin });
    }
  }

  componentDidMount() {
    this.props.getPostList();
  }

  render() {
    let arrayTemp = this.props.post ? this.props.post : [];
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
                      <input className="btn btn--gray product-section__search__submit" type="submit" value="SEARCH" />
                  </form>
                  <div className="confirm__pin">
                       <button className="btn btn--green product-section__search__post" onClick={this.createPost}>POST NEW</button>
                      { !isAuth() && this.state.openLogin &&
                        <div className="confirm__main">
                            <Login history={this.props.history} />
                        </div>
                      }
                  </div>
              </div>
              {
                arrayTemp.map((item, index) => {
                  return (
                    <ProductItem key={index} order={index} data={item} />
                  )
                })
              }
          </div>
          <div className="product-section__banner"></div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.post
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getPostList: () => {
      dispatch(getPostList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
