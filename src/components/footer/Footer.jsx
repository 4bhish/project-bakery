import React from "react";
import "../footer/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">© 2024 Sweet moments, baked daily at <Link to='/' className="footer-link">FRIENDS BAKERY</Link>.</p>
    </div>
  );
};

export default Footer;
