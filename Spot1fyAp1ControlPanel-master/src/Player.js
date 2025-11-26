import React from "react";
import * as $ from "jquery";
import "./player-background.css";

//some buttons works only premium user. 
function getNextPlaying(token) {
    $.ajax({
        url: "https://api.spotify.com/v1/me/player/next",
        type: "POST",
        beforeSend: xhr => {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        }
    });
};

function getPause(token) {
    $.ajax({
        url: "https://api.spotify.com/v1/me/player/pause",
        type: "PUT",
        beforeSend: xhr => {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        }
    });
};
function getplay(token) {
    $.ajax({
        url: "https://api.spotify.com/v1/me/player/play",
        type: "PUT",
        beforeSend: xhr => {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        }
    });
};

function getPrevPlaying(token) {
    $.ajax({
        url: "https://api.spotify.com/v1/me/player/previous",
        type: "POST",
        beforeSend: xhr => {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        }
    });
};


const Player = props => {
    const backgroundStyles = {
        backgroundImage: `url(${props.item.album.images[0].url})`,
    };

    const progressBarStyles = {
        width: (props.progress_ms * 100 / props.item.duration_ms) + '%'
    };

    //console.log(props);


    return (
        <div className="App">
            <div>
                <button onClick={() => getPrevPlaying(props.token)}>Previous</button>
                <button onClick={() => getPause(props.token)}>Pause</button>
                <button onClick={() => getplay(props.token)}>Play</button>
                <button onClick={() => getNextPlaying(props.token)}>Next</button>
            </div>
            <div className="main-wrapper">
                <div className="now-playing-img">
                    <img src={props.item.album.images[0].url} alt="spotify" />
                </div>
                <div className="now-playing-side">
                    <div className="now-playing-name">{props.item.name}</div>
                    <div className="now-playing-artist">
                        {props.item.artists[0].name}
                    </div>
                    <div className="now-playing-status">
                        {props.is_playing ? "Playing" : "Paused"}
                    </div>
                    <div className="progress">
                        <div className="progress-bar" style={progressBarStyles} />
                    </div>
                </div>
                <div className="background" style={backgroundStyles} />{" "}
            </div>
        </div>
    );

}
export default Player;