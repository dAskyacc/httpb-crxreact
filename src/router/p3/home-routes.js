import HomeIndex from '~Pages/home';

const homeRoutes = [
  {
    path: '/index',
    component: HomeIndex,
    key: '/index',
    exact: true,
    children: [],
  },
];

export default homeRoutes;
