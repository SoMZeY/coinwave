import React from "react";

import "./Navbar.css";
import Button from "../UI/Button.js";

// import magnify_icon from "../assets/icons/magnify-icon.png";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <header className="navbar">
        <h1>Coinwave</h1>
        <input placeholder="Search" />
        <Button>Log in</Button>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
