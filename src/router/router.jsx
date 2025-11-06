import { Fragment } from 'react';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { NotFound } from './NotFound';
import { Root } from './root';
import { routes } from './routes';
import { ROUTES } from '@/constants';

const Error = () => <div>Oops! Something went wrong.</div>;

function generateRoutes(routes) {
  return routes.map((route) => {
    const isRoot = route.path === ROUTES.ROOT;

    const element = route.element || null;
    const childRoutes = route.children ? generateRoutes(route.children) : null;

    const pathProp = isRoot ? { index: true } : { path: route.path };

    return (
      <Fragment key={route.path}>
        <Route key={route.path} {...pathProp} element={element} errorElement={<Error />} />
        {childRoutes}
      </Fragment>
    );
  });
}

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      {generateRoutes(routes)}
      <Route path="*" element={<NotFound />} errorElement={<Error />} />
    </Route>
  ),
);

export const Router = () => <RouterProvider router={router} />;
