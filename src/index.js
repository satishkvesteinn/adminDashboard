import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LoginState from './context/login/loginState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <LoginState>
      <App />
      </LoginState>
    </BrowserRouter>
  </React.StrictMode>
);

