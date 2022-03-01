import {
//   AUTH,
  ADMIN,
  PUBLIC_ONLY,
} from './auth-types';

const routeStructure = [
  {
    path: '/',
    pageName: 'FullPage',
  },
  {
    path: '*',
    pageName: 'NotFoundPage',
  },
  {
    path: '/admin',
    pageName: 'LogInAdmin',
    auth: PUBLIC_ONLY,
  },
  {
    path: '/checkout',
    pageName: 'CheckoutPage',
  },
  {
    path: '/dashboard',
    pageName: 'AdminDashboard',
    auth: ADMIN,
  },
  // {
  //   path: '/dashboard',
  //   pageName: 'DashboardLayout',
  //   childRoutes: [
  //     { path: 'admin', pageName: 'AdminPage', auth: ADMIN },
  //     // { path: 'admin/products', pageName: 'ProductPanelPage', auth: ADMIN },
  //     // { path: 'admin/users', pageName: 'UserPanelPage', auth: ADMIN },
  //   ],
  // },
];

export default routeStructure;
