import { Fragment } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { NotFound } from './NotFound';
import { Root } from './root';
import { routes } from './routes';

const Error = () => <div>Oops! Something went wrong.</div>;

function generateRoutes(routes) {
  return routes.map((route) => {
    const element = route.element || null;

    const childRoutes = route.children ? generateRoutes(route.children) : null;

    return (
      <Fragment key={route.path}>
        <Route key={route.path} path={route.path} element={element} errorElement={<Error />} />
        {childRoutes}
      </Fragment>
    );
  });
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      {generateRoutes(routes)}
      <Route path="*" element={<NotFound />} errorElement={<Error />} />
    </Route>
  )
);

export const Router = () => <RouterProvider router={router} />;
