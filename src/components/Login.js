import React from 'react';
import '../styles/Login.css';
import spotify from '../assets/Spotify_Logo_RGB_White.png';
import { getTokenFromUrl, loginUrl } from './spotify';

function Login () {
  return (

    <div className="login">
      <img src={spotify} alt="" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
  </div>
  );
}

export default Login;
