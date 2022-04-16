import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

function App() {
  return (
    <>
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
    </>
  );
}

ReactDOM.render(
  <Auth0Provider
    domain="dev-7q2gjdgs.us.auth0.com"
    clientId="fHkSZ9m2WhM7F3cxD1IlMw0yb1bRvzNH"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
