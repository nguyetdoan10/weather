import { PropsWithChildren } from 'react';

import { Container, Wrapper } from './app-container.styled';

interface AppContainerProps {}

export function AppContainer({ children }: PropsWithChildren<AppContainerProps>) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}
