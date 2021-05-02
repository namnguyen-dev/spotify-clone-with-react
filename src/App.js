import './App.css';
import Login from './Login';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);
  console.log(token);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      // access spotify with this token
      spotify.setAccessToken(_token);

      // save token to state
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      // save user to state
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user,
        });
      });

      // save playlists to state
      spotify.getUserPlaylists().then(playlists => {
        console.log("getUser", playlists);
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
