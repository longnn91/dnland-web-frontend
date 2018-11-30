import React from 'react';
import { HomePage, LoginPage, NotFoundPage, ProductPage } from 'pages';
import { Temps } from 'components';
import { isAuth } from 'actions/authAction';


const routes = [
  {
    path: '/',
    exact: true,
    auth: true,
    main: () => <HomePage />
  },
  {
    path: '/temps',
    exact: false,
    auth: true,
    main: Temps
  },
  {
    path: '/login',
    exact: false,
    auth: false,
    main: ({ history }) => <LoginPage history={history}/>
  },
  {
    path: '/product',
    exact: false,
    auth: true,
    main: () => <ProductPage />
  },
  {
    path: '',
    exact: false,
    auth: true,
    main: ({ history }) => <NotFoundPage history={history} />
  }
];

export default routes;
