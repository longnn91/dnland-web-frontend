export const headerMenu = [
  {
    name: 'HOME',
    to: '/',
    exact: false,
    auth: true
  },
  {
    name: 'PRODUCTS',
    to: '/product',
    exact: false,
    auth: true
  },
  {
    name: 'REGISTER',
    to: '/register',
    exact: true,
    auth: false
  },
  {
    name: 'LOG IN',
    to: '/login',
    exact: false,
    auth: false
  }
];

export const messageData = [
  {
    path: '/register-success',
    title: 'Register successfully!',
    message: 'Please checkout your registered email to verify your account.',
    button: [
      {
        name: 'Back',
        className: 'button button--medium button--gray mgr-5',
        redirectTo: '/register'
      },
      {
        name: 'Login',
        className: 'button button--medium button--green mgl-5',
        redirectTo: '/login'
      }
    ]
  }
]
