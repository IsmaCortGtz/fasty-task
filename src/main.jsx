import React from 'react';
import ReactDOM from 'react-dom/client';

import './libs/styles/theme.css';
import './libs/styles/index.css';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);