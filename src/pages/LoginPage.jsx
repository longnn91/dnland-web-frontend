import React, { Component } from 'react';
import {BannerSlide, Post, PostPaggination, SideBar} from 'components';

export default class HomePage extends Component {
  render(){
    return (
      <div className="main main--center">
          <section className="section-login form">
            <form action="#" className="form__login form--vertical">
              <div className="form__header">
                <span className="form__header__title">Login form</span>
                <span className="form__header__close-button"></span>
              </div>
              <input type="text" className="form__input" placeholder="Email..." />
              <input type="text" className="form__input" placeholder="Password..." />
              <input type="submit" className="form__button" />
            </form>
          </section>
      </div>
    )
  }
}
