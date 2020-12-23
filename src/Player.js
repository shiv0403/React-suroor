import React from "react";
import "./Player.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";

function Player() {
  return (
    <div className="player">
      <div className="player_left">
        {/* song details */}
        <img src="" alt="" className="album_logo" />
        <div className="player_albluminfo">
          <h4>Song name</h4>
          <p>Description</p>
        </div>
      </div>

      <div className="player_center">
        <ShuffleIcon className="player_icon" />
        <SkipPreviousIcon className="player_icon" />
        <PlayCircleOutlineIcon fontSize="large" className="player_icon" />
        <SkipNextIcon className="player_icon" />
        <RepeatIcon className="player_icon" />
      </div>

      <div className="player_right">
        {/* volume controls */}
        <ul>
          <li>
            <PlaylistPlayIcon />
          </li>
          <li>
            <div className="player_right_volume">
              <VolumeDownIcon />
              <Slider />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Player;
