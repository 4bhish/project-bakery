import React from "react";
import "../navbar/navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <h1 className="nav-h1">Site Name</h1>
      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Product</li>
      </ul>
    </div>
  );
};

export default Navbar;
