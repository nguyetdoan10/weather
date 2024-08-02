import { Link } from 'react-router-dom';

import { AppContainer } from '../app-container';

export default function NotFound() {
  return (
    <AppContainer>
      <h1> 404 Error.</h1>
      <p> We can&apos;t find the page you&apos;re looking for.</p>
      <Link to={'/'} replace>
        <button>Back to home</button>
      </Link>
    </AppContainer>
  );
}
