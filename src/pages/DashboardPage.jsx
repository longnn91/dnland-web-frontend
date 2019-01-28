import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Footer} from 'components';
import Header from 'components/Header';
import routes from '../Routes';
import { isAuth } from 'actions/authAction';
import ReduxToastr from 'react-redux-toastr';


export default class DashboardPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
