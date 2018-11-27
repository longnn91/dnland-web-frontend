import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';
import {Header, Footer} from 'components';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import ProductPage from './ProductPage';
import routes from '../Routes';

class Temps1 extends Component {
  render(){
    console.log(this.props);
    return (
      <h1>SHENLONG</h1>
    )
  }
}

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
                  <Route exact path="/temps1" component={Temps1}/>
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
