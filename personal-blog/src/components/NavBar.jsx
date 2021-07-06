import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
const NavBar = (props) => {
  // console.log(props)
  const [clicked, setClicked] = useState(false);
  return (
    <div className={`navbar ${clicked && "responsive"}`}>
      <div
        className="logo"
        style={{ backgroundImage: "url('./imgs/fox.png')" }}
      ></div>

      <div className="linkMenu">
        {props.navlinks.map((link) => (
          <Link
          to={link.anchor}
          className={link.active ? "active" : ""}
          key={link.id}
          onClick={() => {
            props.onChangeActive(link.id);
          }}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <a
        href="https://www.instagram.com/random_casualtiess/"
        className="follow"
        >
        Follow
      </a>
      <img
        src="./imgs/menu.svg"
        alt="menu"
        className="menu"
        onClick={() => {
          setClicked(!clicked);
        }}
      ></img>
    </div>
  );
};

export default NavBar;
