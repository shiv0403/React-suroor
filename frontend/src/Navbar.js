import React from "react";
import "./Navbar.css";

const buttonStyle = {
  backgroundColor: "#0779e4",
  color: "#fff",
  borderRadius: "10px",
  padding: "9px",
};

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_first">
        <ul>
          <li>Suroor</li>
          <li style={buttonStyle}>Home</li>
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
