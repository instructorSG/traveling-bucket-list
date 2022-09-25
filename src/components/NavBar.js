import React from "react";
import { NavLink } from "react-router-dom";
// import "./Navbar.css"

function NavBar() {
  return (
    <nav className="nav">
      <div>
        <h4> Travel Bucket List </h4>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/details">Details</NavLink>
          </li>
          <li>
            <NavLink to="bucketlist">Bucket List</NavLink>
          </li>
          <li>
            <NavLink to="visited">Visited</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
