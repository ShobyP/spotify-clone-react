import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './components/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';


const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const tokenFromHash = hash.access_token;
      if(tokenFromHash){
        setToken(tokenFromHash);
        spotify.setAccessToken(tokenFromHash)
        spotify.getMe().then(user => {
          console.log('here is the user: ', user)
        })
      }
  }, [])

  return (
    <div className="App">
      {
        token ? (
          <Player/>
        ) : (
          <Login/>
          )
      }

    </div>
  );
}

export default App;
