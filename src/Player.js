import React, { useState } from "react";
import "./Player.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Slider } from "@material-ui/core";

const useStylesVolume = makeStyles({
  root: {
    width: 100,
  },
});

const useStylesSong = makeStyles({
  root: {
    width: "700px",
    color: "#fff",
    margin: "auto",
  },
});

function Player() {
  const volumeSliderStyle = useStylesVolume();
  const songSliderStyle = useStylesSong();

  const [volume, setVolume] = useState(30);
  const [length, setLength] = useState(0);

  const handleChangeSong = (event, newValue) => {
    setLength(newValue);
  };

  const handleChangeVolume = (event, newValue) => {
    setVolume(newValue);
  };

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
        <div className="player_center_buttons">
          <ShuffleIcon className="player_icon" />
          <SkipPreviousIcon className="player_icon" />
          <PlayCircleOutlineIcon fontSize="large" className="player_icon" />
          <SkipNextIcon className="player_icon" />
          <RepeatIcon className="player_icon" />
        </div>
        <div className="player_center_slider">
          <Slider
            value={length}
            onChange={handleChangeSong}
            className={songSliderStyle.root}
            aria-labelledby="continuous-slider"
          />
        </div>
      </div>

      <div className="player_right">
        {/* volume controls */}
        <ul>
          <li>
            <PlaylistPlayIcon />
          </li>
          <li>
            <div className="player_right_volume">
              <VolumeDownIcon className="player_volume_down" />
              <Slider
                className={volumeSliderStyle.root}
                value={volume}
                onChange={handleChangeVolume}
                aria-labelledby="continuous-slider"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Player;
