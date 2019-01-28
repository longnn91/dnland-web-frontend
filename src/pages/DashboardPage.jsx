import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Footer} from 'components';
import Header from 'components/Header';
import routes from '../Routes';
import { isAuth } from 'actions/authAction';
import {I18n} from 'react-i18nify';
import ReduxToastr from 'react-redux-toastr';

I18n.setTranslations({
  en: {
    application: {
      title: 'Awesome app with i18n!',
      hello: 'Hello, %{name}!'
      }
    },
  nl: {
    application: {
      title: 'Toffe app met i18n!',
      hello: 'Hallo, %{name}!'
    }
  }
  });


export default class DashboardPage extends Component {
  constructor(props) {
    super(props);
    I18n.setLocale('en');
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage() {
    I18n.setLocale('nl');
    I18n.forceComponentsUpdate();
    // this.setState({...this.state});
  }

  render() {
    console.log('ffff');
    return (
      <div className="wrapper">
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            closeOnToastrClick/>
          <Switch>
              <Route
                path=""
                exact={true}
                component = { ({history}) => <Header history={history} /> }
              >
              </Route>
          </Switch>
          <div className="main">
              <span onClick={this.changeLanguage}>{I18n.t('application.title')}</span>
              <Switch>
                {
                  routes.map((route, index) => {
                    let redirectComponent = route.main;
                    if (isAuth() && !route.auth) {
                      redirectComponent = (props) => <Redirect to={{pathname: "/product"}} />;
                    }

                    if (!isAuth() && route.auth) {
                      redirectComponent = (props) => <Redirect to={{pathname: "/guest"}} />;
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
