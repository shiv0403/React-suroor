import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import AlbumIcon from "@material-ui/icons/Album";
import CreateIcon from "@material-ui/icons/Create";
import SearchIcon from "@material-ui/icons/Search";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import AddIcon from "@material-ui/icons/Add";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar_first">
        <li>
          <div className="sidebar_option">
            <HomeIcon />
            <p>Home</p>
          </div>
        </li>
        <li>
          <div className="sidebar_option">
            <AlbumIcon />
            <p>Album</p>
          </div>
        </li>

        <li>
          <div className="sidebar_option">
            <CreateIcon />
            <p>Artist</p>
          </div>
        </li>
        <li>
          <div className="sidebar_option">
            <SearchIcon />
            <p>Search</p>
          </div>
        </li>
      </ul>

      <hr />

      <ul className="sidebar_second">
        <li>
          <div className="sidebar_option">
            <ThumbUpAltIcon />
            <p>Liked Songs</p>
          </div>
        </li>
        <li>
          <button className="sidebar_button">
            <div className="new_playlist">
              <AddIcon style={{ fill: "#0779e4" }} />
              <p>New Playlist</p>
            </div>
          </button>
        </li>
      </ul>

      <hr />

      <ul className="sidebar_third">
        <li className="sidebar_option">
          <p># Party Time</p>
        </li>
        <li className="sidebar_option">
          <p># Breakup songs</p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
