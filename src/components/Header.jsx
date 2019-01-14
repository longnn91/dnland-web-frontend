import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Modal from 'react-modal';
import { headerMenu } from 'constants/data';
import LogoutModal from 'modals/Logout.modal';
import { isAuth } from 'actions/authAction';

const MenuLink = ({label, to, exact}) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({match}) => {
        var active = match ? 'active' : 'none-active';
        return (
          <Link className={active} to={to}>{label}</Link>
        )
      }}
    />
  )
}

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.menu = headerMenu;
    this.state = {
      openModal: false
    };
  }

  openModal() {
  this.setState({openModal: !this.state.openModal});
  }

  showMenu = (menu) => {
    var result = null;
    if (menu.length > 0) {
      result = menu.map((menu, index) => {
        let redirectComponent = null;
        if (isAuth()) {
          redirectComponent = menu.auth ?
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            exact={menu.exact}
           /> : null;
        } else {
          redirectComponent = menu.auth ? null :
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            exact={menu.exact}
           />
        }
        return(
          redirectComponent
       );
      });
    }
    return result;
  }

  render() {
    return (
      <header className="header">
          <div className="header__container">
              <div className="header__logo">
                  <img className="header__logo__img" src="img/logo-dark.svg" alt="" />
              </div>
              <div className="header__menu menu">
                  <span className="menu__item menu__item--active">PRODUCT</span>
                  <span className="menu__item">PRICING</span>
                  <span className="menu__item">DOWNLOAD</span>
                  <span className="menu__item">BLOG</span>
              </div>
              <div className="header__account">
                  <div className="header__account__item">
                      <i className="header__account__icon fas fa-lock"></i>
                      <span className="header__account__text align-bt">LOG IN</span>
                   </div>
                  <button className="header__account__item btn btn--green">SIGN UP</button>
              </div>
          </div>
      </header>
    )
  }
}
