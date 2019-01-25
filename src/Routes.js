import React from 'react';
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  ProductPage,
  RegisterPage,
  MessagePage,
  CreatePostPage
} from 'pages';
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
    path: '/guest',
    exact: false,
    auth: false,
    main: ({ history }) => <ProductPage history={history}/>
  },
  {
    path: '/register',
    exact: false,
    auth: false,
    main: ({ history }) => <RegisterPage history={history}/>
  },
  {
    path: '/register-success',
    exact: false,
    auth: false,
    main: ({ history }) => <MessagePage history={history}/>
  },
  {
    path: '/product',
    exact: false,
    auth: true,
    main: ({ history }) => <ProductPage history={history} />
  },
  {
    path: '/create-post',
    exact: false,
    auth: true,
    main: ({ history }) => <CreatePostPage history={history} />
  },
  {
    path: '',
    exact: false,
    auth: true,
    main: ({ history }) => <NotFoundPage history={history} />
  }
];

export default routes;
