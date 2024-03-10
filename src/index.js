import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style/style.scss';

import App from './components/app/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
