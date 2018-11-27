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
    main: () => <LoginPage />
  },
  {
    path: '/product',
    exact: false,
    main: ProductPage
  },
  {
    path: '',
    exact: false,
    main: () => <NotFoundPage />
  }
];

export default routes;
