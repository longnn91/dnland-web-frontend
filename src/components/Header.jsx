import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link, Route } from 'react-router-dom';
import Modal from 'react-modal';
import { headerMenu } from 'constants/data';
import LogoutModal from 'modals/Logout.modal';
import Login from 'components/Login';
import Register from 'components/Register';
import { isAuth } from 'actions/authAction';
import { setLanguage } from 'actions/languageAction';
import { trans } from 'utils/translations';

const MenuLink = ({label, to, exact}) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({match}) => {
        var active = match ? 'active' : 'none-active';
        return (
          <Link className={`menu__item ${active}`} to={to}>{trans(label)}</Link>
        )
      }}
    />
  )
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.openRegister = this.openRegister.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.menu = headerMenu;
    this.state = {
      openModal: false,
      openLogin: false,
      openRegister: false
    };
  }

  changeLanguage() {
    let lang = this.props.language === 'vi' ? 'en' : 'vi';
    this.props.setLanguage(lang);
  }

  openModal() {
    this.setState({openModal: !this.state.openModal});
  }

  openLogin() {
    this.setState({
      openLogin: !this.state.openLogin,
      openRegister: false
    });
  }

  openRegister() {
    this.setState({
      openRegister: !this.state.openRegister,
      openLogin: false
    });
  }

  showMenu = (menu) => {
    var result = null;
    if (menu.length > 0) {
      result = menu.map((menu, index) => {
        let redirectComponent = null;
        if (isAuth()) {
          redirectComponent = menu.show === 'all' || menu.show === 'auth' ?
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            exact={menu.exact}
           /> : null;
        } else {
          redirectComponent = menu.show === 'auth' ? null :
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
    const language = this.props.language;
    return (
      <header className="header">
          <div className="header__container">
              <div className="header__logo">
                  <div className="header__logo__text cursor-pointer hidden">
                      <span>MAT</span>
                      <span>BANG</span>
                      <span>XANH</span>
                  </div>
              </div>
              <div className="header__menu menu">
                  {this.showMenu(this.menu)}
              </div>
              <div className="header__account">
                    <div className="header__language" onClick={this.changeLanguage}>
                         <img src="img/en-flag.svg" className={ language === 'vi' ? 'header__language__show' : '' }></img>
                         <img src="img/vi-flag.svg" className={ language === 'en' ? 'header__language__show' : '' }></img>
                    </div>
                    { !isAuth() &&
                       <div className="confirm__pin">
                           <div className="header__account__item" onClick={this.openLogin}>
                               <i className="header__account__icon fas fa-lock"></i>
                               <span className="header__account__text align-bt">{trans('login')}</span>
                            </div>
                           { this.state.openLogin &&
                             <div className="confirm__main">
                                 <Login history={this.props.history} />
                             </div>
                           }
                        </div>
                    }
                    { !isAuth() &&
                      <div className="confirm__pin">
                          <button className="header__account__item btn btn--green btn--md" onClick={this.openRegister}>
                              {trans('register')}
                          </button>
                          { this.state.openRegister &&
                            <div className="confirm__main">
                                <Register history={this.props.history} />
                            </div>
                          }
                      </div>
                    }
                   { isAuth() &&
                      <button className="header__account__item btn btn--danger btn--sm" onClick={this.openModal}>{trans('logout')}</button>
                   }
                   <LogoutModal openModal={this.openModal} isOpenModal={this.state.openModal}></LogoutModal>
              </div>
          </div>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    language: state.i18n.language
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    setLanguage: (key) => {
      dispatch(setLanguage(key));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
