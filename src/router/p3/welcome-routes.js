import WelcomeIndex from '~Pages/welcome/index';

const welcomeRoutes = [
  {
    path: '/welcome',
    component: WelcomeIndex,
    exact: true,
    key: '/welcome',
    children: [],
  },
];

export default welcomeRoutes;
