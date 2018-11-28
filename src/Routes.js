import React from 'react';
import { HomePage, LoginPage, NotFoundPage } from 'pages';
import ProductPage from 'pages/ProductPage';
import { Temps } from 'components';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => {
      return <NotFoundPage />
    }
  },
  {
    path: '/temps',
    exact: false,
    main: Temps
  },
  {
    path: '/login',
    exact: false,
    main: ({ history }) => <LoginPage history={history}/>
  },
  {
    path: '/product',
    exact: false,
    main: ProductPage
  },
  {
    path: '',
    exact: false,
    main: ({ history }) => <NotFoundPage history={history} />
  }
];

export default routes;
