import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import CloseIcon from '@mui/icons-material/Close';

import "./navbar.css"; 

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuAnimation = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    transform: `translateY(${isMenuOpen ? 0 : '-100%'})`,
  });

  return (
    <div className="Navbar">
      <h1 className="nav-h1">Friends Bakery</h1>
      <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        {isMenuOpen ? <span><CloseIcon style={{fontSize:'3rem'}} /></span> : (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </div>
      <div className={`nav-list ${isMenuOpen ? "open" : ""}`}>
        <div>
          <NavLink className="navlink" to="/" onClick={toggleMenu}>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink className="navlink" to="/products" onClick={toggleMenu}>
            Products
          </NavLink>
        </div>
        <div>
          <NavLink className="navlink" to="/about" onClick={toggleMenu}>
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
