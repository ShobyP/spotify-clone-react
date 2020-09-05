import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './components/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import {useDataLayerValue} from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {

  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const tokenFromHash = hash.access_token;
      if(tokenFromHash){
        dispatch({
          type: 'SET_TOKEN',
          token: tokenFromHash
        })
        spotify.setAccessToken(tokenFromHash)
        spotify.getMe().then(user => {
          dispatch({
            type: 'SET_USER',
            user: user
          });
        })
      }
  }, [])
  console.log(user);
  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login/>
          )
      }

    </div>
  );
}

export default App;
