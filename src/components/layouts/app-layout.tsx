import { Outlet } from 'react-router-dom';

import { AppContainer } from '../app-container';

export function AppLayout() {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
}
