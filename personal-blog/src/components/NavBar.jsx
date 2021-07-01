import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
const NavBar = (props) => {
  // console.log(props)
  return (
    <div className="navbar">
      <div
        className="logo"
        style={{ backgroundImage: "url('./logo192.png')" }}
      ></div>
      <div className="linkMenu">
        {props.navlinks.map((link) => (
          <Link
            to={link.anchor}
            className={link.active ? "active" : ""}
            key={link.id}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <a href="#">Subscribe</a>
    </div>
  );
};

export default NavBar;
