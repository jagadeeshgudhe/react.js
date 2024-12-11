import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx'; 
import header from './header.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
