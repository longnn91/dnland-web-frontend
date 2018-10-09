import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';
import {Header, Footer} from 'components';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

export default class DashboardPage extends Component {
  render() {
    return (
      <div className="wrapper">
          <Header/>
            <div className="main main--center">
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={LoginPage}/>
              </Switch>
            </div>
          <Footer/>
      </div>
    )
  }
}
