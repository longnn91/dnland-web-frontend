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
        <div className="header__topbar">
          <div className="header__topbar__container">
            <div className="header__topbar__logo">
              <span>DUMB</span>
              <span>DATA</span>
            </div>
            <div className="header__topbar__toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="header__topbar__search-box">
              <form className="form" action="#" name="search">
                <div className="form__group">
                  <i className="fa fa-search"></i>
                  <input className="form__input" type="text" placeholder="WHAT YOU WILL LEARN NEXT" />
                </div>
                <input className="form__button" type="submit" value="SEARCH" />
              </form>
            </div>
            <div className="header__topbar__link">
              {this.showMenu(this.menu)}
              { isAuth() && <button className="button button--small button--danger" onClick={this.openModal}>LOG OUT</button>}
              <LogoutModal openModal={this.openModal} isOpenModal={this.state.openModal}></LogoutModal>
            </div>
          </div>
        </div>
        <div className="header__menu">
          <div className="header__menu__container">
            <a href="#" className="menu__item menu__item-add">
              <span className="icon icon-none"></span>
              <span>SIGN UP</span>
            </a>
            <a href="#" className="menu__item menu__item-add">
              <span className="icon icon-none"></span>
              <span>SIGN IN</span>
            </a>
            <a href="#" className="menu__item">
              <span className="icon icon__catalog"></span>
              <span>Catalog</span>
            </a>
            <a href="#" className="menu__item">
              <span className="icon icon__series"></span>
              <span>Series</span>
            </a>
            <a href="#" className="menu__item">
              <span className="icon icon__skills"></span>
              <span>Skill</span>
            </a>
            <a href="#" className="menu__item">
              <span className="icon icon__podcast"></span>
              <span>Podcast</span>
            </a>
            <a href="#" className="menu__item">
              <span className="icon icon__discuss"></span>
              <span>Discussion</span>
            </a>
          </div>
        </div>
      </header>
    )
  }
}
