import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Footer} from 'components';
import Header from 'components/Header';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import ProductPage from './ProductPage';
import routes from '../Routes';
import { isAuth } from 'actions/authAction';
const { I18n } = require('react-i18nify');

const translations = () => (
  {
    en: {
      application: {
        title: 'Awesome app with i18n!',
        hello: 'Hello, %{name}!'
      },
      date: {
        long: 'MMMM Do, YYYY'
      },
      export: 'Export %{count} items',
      export_0: 'Nothing to export',
      export_1: 'Export %{count} item',
      two_lines: 'Line 1<br />Line 2'
    },
    nl: {
      application: {
        title: 'Toffe app met i18n!',
        hello: 'Hallo, %{name}!'
      },
      date: {
        long: 'D MMMM YYYY'
      },
      export: 'Exporteer %{count} dingen',
      export_0: 'Niks te exporteren',
      export_1: 'Exporteer %{count} ding',
      two_lines: 'Regel 1<br />Regel 2'
    }
  }
);

I18n.setTranslationsGetter(translations);

const locale = () => 'nl';

I18n.setLocaleGetter(locale);

class ParentElement extends Component {
  render() {
    return (<div>{this.props.children}</div>)
  }
}

class ChildElement extends Component {
  render() {
    return (<h3>This is childElement</h3>)
  }
}

export default class DashboardPage extends Component {
  constructor(props) {
    super(props);
  }

  getWrapperClass() {
    if (['/register-success'].indexOf(window.location.pathname) !== -1) {
      return "wrapper wrapper--white";
    }
    return "wrapper";
  }

  changeLanguage() {
    console.log('zzzz');
    I18n.forceComponentsUpdate();
    I18n.setLocale(()=> {
      return 'en';
    }, true);
  }

  render() {
    return (
      <div className={this.getWrapperClass()}>
          <Header/>
            <div className="main main--center">
              <Switch>
                {
                  routes.map((route, index) => {
                    let redirectComponent = route.main;
                    if (isAuth() && !route.auth) {
                      redirectComponent = (props) => <Redirect to={{pathname: "/product"}} />;
                    }

                    if (!isAuth() && route.auth) {
                      redirectComponent = (props) => <Redirect to={{pathname: "/login"}} />;
                    }
                    return (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={redirectComponent}
                     />
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
