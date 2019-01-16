export const headerMenu = [
  {
    name: 'PRODUCT',
    to: '/guest',
    exact: false,
    show: 'guest'
  },
  {
    name: 'PRICING',
    to: '/price',
    exact: false,
    show: 'all'
  },
  {
    name: 'DOWNLOAD',
    to: '/download',
    exact: false,
    show: 'all'
  },
  {
    name: 'ABOUT US',
    to: '/about',
    exact: false,
    show: 'all'
  },
  {
    name: 'PROFILE',
    to: '/profile',
    exact: false,
    show: 'auth'
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
