export const useArrayMenu = true;

export const arrayMenu = [
  { id: 1, icon: 'laptop', name: 'home', text: '', router: '/home' },
];

export const treeMenu = [
  {
    id: 1,
    icon: 'laptop',
    name: 'home',
    text: '',
    router: '/home',
    children: [
      {
        id: 1,
        icon: 'laptop',
        name: 'home',
        text: '',
        router: 'dashboard',
      },
    ],
  },
];

const menuConfig = {
  useArrayMenu,
  arrayMenu,
  treeMenu,
};

export default menuConfig;
