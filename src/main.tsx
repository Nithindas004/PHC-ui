import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.tsx';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap your entire application with BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
