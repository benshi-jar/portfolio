import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/tokens.css';
import './styles/base.css';
import './styles/utilities.css';

if (import.meta.env.DEV) {
  import('./lib/validateData.js').then(({ validateData }) => validateData());
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
