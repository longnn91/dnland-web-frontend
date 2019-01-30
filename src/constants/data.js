export const headerMenu = [
  {
    name: 'product',
    to: '/guest',
    exact: false,
    show: 'guest'
  },
  {
    name: 'product',
    to: '/product',
    exact: true,
    show: 'all'
  },
  {
    name: 'download',
    to: '/download',
    exact: false,
    show: 'all'
  },
  {
    name: 'about_us',
    to: '/about',
    exact: false,
    show: 'all'
  },
  {
    name: 'profile',
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
