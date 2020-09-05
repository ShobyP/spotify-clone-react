import React from 'react';
import '../styles/Login.css';
import '../styles/Player.css';
import {useDataLayerValue} from "../DataLayer";
import Sidebar from "./Sidebar";
import PlayerBody from "./PlayerBody";
import PlayerFooter from "./PlayerFooter";

function Player ({ spotify }) {
    const [{user, token}] = useDataLayerValue();
    console.log('current user is : ',user);
    console.log('current token is : ',token);
  return (
    <div className="player">
        <div className="player-layout">
                <Sidebar />
                <PlayerBody />
        </div>
        <PlayerFooter />
    </div>
  );
}

export default Player;
