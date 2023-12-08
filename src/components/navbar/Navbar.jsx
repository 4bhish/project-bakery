import React from "react";
import "../navbar/navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Navbar">
      <h1 className="nav-h1">Site Name</h1>
      <ul className="nav-list">
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>Product</li>
      </ul>
    </div>
  );
};

export default Navbar;
