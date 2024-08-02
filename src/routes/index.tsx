import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import { TodaysWeatherRoutesLazy } from '../features/todays-weather/lazy';

const NotFoundLazy = React.lazy(() => import('../components/errors/not-found'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <TodaysWeatherRoutesLazy />,
  },

  { path: '*', element: <NotFoundLazy /> },
];

export const AppRoutes = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};
