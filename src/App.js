import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Showcase from "./Showcase";
import Player from "./Player";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app_main">
        <Sidebar />
        <Showcase />
      </div>
      <Player />
    </div>
  );
}

export default App;
