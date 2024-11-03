import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'; // Змінюємо шлях, якщо потрібно 

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);