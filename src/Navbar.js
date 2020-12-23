import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_first">
        <ul>
          <li>Suroor</li>
          <li>Home</li>
          <li>Search</li>
        </ul>
      </div>
      <div className="navbar_second">
        <ul>
          <li>login</li>
          <li>signup</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
