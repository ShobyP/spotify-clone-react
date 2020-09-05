import React from 'react';
import "../styles/Sidebar.css"
import whiteCircle from '../assets/white-circle-spotify-logo-png-35.png'
import whitelogo from '../assets/Spotify_Logo_RGB_White_2.png'

function Sidebar () {
    return (
        <div className="sidebar">
            <img className="sidebar-logo" src={whitelogo} alt="" />
        </div>
    );
}

export default Sidebar;
