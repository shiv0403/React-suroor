import React, { useState, useEffect } from "react";
import "./Player.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Slider } from "@material-ui/core";

// material ui style objects
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
  // using styles
  const volumeSliderStyle = useStylesVolume();
  const songSliderStyle = useStylesSong();

  //usestate hooks
  const [volume, setVolume] = useState(30);
  const [length, setLength] = useState(0);
  const [isPlaying, setIsplaying] = useState(0);
  const [isMuted, setIsMuted] = useState(0);
  const [currentDuration, setCurrentDuration] = useState("00:00");
  const [fullDuration, setFullDuration] = useState("0:00");
  const [updateTime, setUpdateTime] = useState(0);
  const [audio] = useState(
    new Audio(
      "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3"
    )
  );

  // handling events functions

  // volume
  const handleChangeVolume = (event, newValue) => {
    setVolume(newValue);
    audio.volume = volume / 100;
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
    audio.muted = true;
  };

  const handleUnMute = () => {
    setIsMuted(!isMuted);
    audio.muted = false;
  };

  //song slider

  const handleChangeSong = (event, newValue) => {
    if (!audio.ended) {
      setLength(newValue);
      const newTime = (newValue * audio.duration) / 100;
      audio.currentTime = newTime;
    }
  };

  const handleSongStatus = () => {
    if (isPlaying) {
      audio.pause();
      window.clearInterval(updateTime);
    } else {
      audio.play();
      setUpdateTime(setInterval(update, 500));
    }

    setIsplaying(!isPlaying);
  };

  const update = () => {
    if (!audio.ended) {
      let playedMinutes = parseInt(audio.currentTime / 60);
      let playedSeconds = parseInt(audio.currentTime % 60);
      if (playedSeconds / 10 < 1) {
        setCurrentDuration(playedMinutes + ":0" + playedSeconds);
      } else {
        setCurrentDuration(playedMinutes + ":" + playedSeconds);
      }

      setLength((audio.currentTime * 100) / audio.duration);
    } else {
      setCurrentDuration("00:00");
      setLength(0);
    }

    if (audio.readyState) {
      let fullDurationMinutes = parseInt(audio.duration / 60);
      let fullDurationSeconds = parseInt(audio.duration % 60);
      if (fullDurationSeconds / 10 < 1) {
        fullDurationSeconds = "0" + fullDurationSeconds;
      }
      setFullDuration(fullDurationMinutes + ":" + fullDurationSeconds);
      console.log(fullDuration);
    }
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

      {/* main player */}
      <div className="player_center">
        <div className="player_center_buttons">
          <ShuffleIcon className="player_icon" />
          <SkipPreviousIcon className="player_icon" />
          {!isPlaying || audio.ended ? (
            <PlayCircleOutlineIcon
              fontSize="large"
              className="player_icon"
              onClick={handleSongStatus}
            />
          ) : (
            <PauseCircleOutlineIcon
              fontSize="large"
              className="player_icon"
              onClick={handleSongStatus}
            />
          )}

          <SkipNextIcon className="player_icon" />
          <RepeatIcon className="player_icon" />
        </div>
        <div className="player_center_slider">
          <p style={{ marginRight: "20px", color: "#fff", fontWeight: "700" }}>
            {currentDuration}
          </p>
          <Slider
            value={length}
            onChange={handleChangeSong}
            className={songSliderStyle.root}
            aria-labelledby="continuous-slider"
          />
          <p style={{ marginLeft: "20px", color: "#fff", fontWeight: "700" }}>
            {fullDuration}
          </p>
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
              {isMuted ? (
                <VolumeMuteIcon onClick={handleUnMute} />
              ) : (
                <VolumeDownIcon onClick={handleMute} />
              )}

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
