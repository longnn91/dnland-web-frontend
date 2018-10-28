import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';
import {Header, Footer} from 'components';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import ProductPage from './ProductPage';
import routes from '../Routes';

export default class DashboardPage extends Component {
  render() {
    return (
      <div className="wrapper">
          <Header/>
            <div className="main main--center">
              <Switch>
                {/*
                  <Route exact path="/" component={HomePage}/>
                  <Route path="/login" component={LoginPage}/>
                  <Route path="/product" component={ProductPage}/>
                  */}
                {
                  routes.map((route, index) => {
                    return (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main} />
                    )
                  })
                }
              </Switch>
            </div>
          <Footer/>
      </div>
    )
  }
}
