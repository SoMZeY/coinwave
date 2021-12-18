import React from "react";

import "./Navbar.css";
import "../UI/Button.css";

// import magnify_icon from "../assets/icons/magnify-icon.png";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <header className="navbar">
        <h1>Coinwave</h1>
        <input placeholder="Search" />
        <button className="button">Log in</button>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
