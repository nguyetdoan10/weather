import { Container } from './app-error-faillback.styled';

export function AppErrorFallback() {
  return (
    <Container>
      <h1>Error.</h1>
      <p>Ooops, something went wrong :( </p>
      <button onClick={() => window.location.reload()}>Refresh Page</button>
    </Container>
  );
}
