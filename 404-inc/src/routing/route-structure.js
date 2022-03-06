import {
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
  {
    path: '/dashboard/subscribers',
    pageName: 'Subscribers',
    auth: ADMIN,
  },
];

export default routeStructure;
