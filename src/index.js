import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/fonts/Roboto-Regular.ttf";
import './index.scss';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
     domain ={process.env.REACT_APP_DOMAIN}
     clientId={process.env.REACT_APP_CLIENT_ID}
     redirectUri={window.location.origin}
     cacheLocation="localstorage">
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


