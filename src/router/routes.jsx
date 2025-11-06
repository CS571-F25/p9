import Home from '@/components/pages/Home';
import { ROUTES } from '@/constants/routes';

export const routes = [
  {
    name: 'Home',
    path: ROUTES.ROOT,
    element: <Home />,
  },
];
