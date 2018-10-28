import React from 'react';
import { HomePage, LoginPage, ProductPage, NotFoundPage  } from 'pages';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => {
      return <NotFoundPage />
    }
  },
  {
    path: '/login',
    exact: false,
    main: () => <LoginPage />
  },
  {
    path: '/product',
    exact: false,
    main: () => <ProductPage />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFoundPage />
  }
];

export default routes;
