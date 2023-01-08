import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src="" className="logo" alt="logo" />
          <button className="nav-toggle">Button</button>
        </div>
        <div className="links-container">
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <a href="https://www.google.com">Fb</a>
          </li>
          <li>
            <a href="https://www.google.com">Insta</a>
          </li>
          <li>
            <a href="https://www.google.com">Twitter</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
