import 'reflect-metadata'

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './stylesheets/css/index.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const getInitialTheme = (): "dark" | "light" =>
{
  if (typeof window === "undefined")
  {
    return "dark";
  }

  try
  {
    const stored = localStorage.getItem("theme");
    return stored === "light" ? "light" : "dark";
  } catch
  {
    return "dark";
  }
};

const initialTheme = getInitialTheme();
document.documentElement.setAttribute("data-theme", initialTheme);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
