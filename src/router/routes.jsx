import { Home, Explore, AuthPage } from '@/components';
import { ROUTES } from '@/constants';

export const routes = [
  {
    name: 'Home',
    path: ROUTES.ROOT,
    element: <Home />,
  },
  // {
  //   name: 'About',
  //   path: ROUTES.ABOUT,
  //   element: <p>ABOUT</p>,
  // },
  {
    name: 'Explore',
    path: ROUTES.EXPLORE,
    element: <Explore />,
  },
  {
    name: 'Login',
    path: ROUTES.AUTH,
    element: <AuthPage />,
  }
];
