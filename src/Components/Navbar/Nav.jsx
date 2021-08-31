import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleHandler = () => setShowMenu(!showMenu);
  return (
    <>
      <div className="navbar">
        <div className="leftSide">
          <Link to="/" className="logo">
            <i className="fas fa-utensils" />
            Foodies
          </Link>
        </div>
        <div className="rightSide">
          <div className="links" id={showMenu ? "hidden" : ""}>
            <Link to="/" className="nav-links active">
              Home
            </Link>
            <Link to="/about" className="nav-links">
              About
            </Link>
            <Link to="/dishes" className="nav-links">
              Dishes
            </Link>
            <Link to="/menu" className="nav-links">
              Menu
            </Link>
            <Link to="/contact" className="nav-links">
              Contact Us
            </Link>
          </div>

          <Link to="#" className="toggleMenu" onClick={toggleHandler}>
            <i className={showMenu ? "fas fa-times" : "fas fa-bars"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
