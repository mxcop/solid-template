/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './lib/app';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found.',
  );
}

render(() => <App />, root!);
