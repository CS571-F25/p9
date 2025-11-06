import { Home, Page2 } from '@/components';
import { ROUTES } from '@/constants/routes';

export const routes = [
  {
    name: 'Home',
    path: ROUTES.ROOT,
    element: <Home />,
  },
  {
    name: 'Page2',
    path: ROUTES.PAGE2,
    element: <Page2 />,
  }
];
