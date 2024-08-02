import { Navigate, useRoutes } from 'react-router-dom';

import { AppLayout } from '../../../components/layouts/app-layout';
import { TodaysWeather } from '../components/todays-weather';

const routes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <TodaysWeather />,
      },
      {
        path: '*',
        element: <Navigate to={'/'} />,
      },
    ],
  },
];

export default function TodaysWeatherRoutes() {
  const element = useRoutes(routes);

  return <>{element}</>;
}
