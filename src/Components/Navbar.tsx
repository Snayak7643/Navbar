import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoDesignernews, IoIosList } from "react-icons/io";

const Navbar = () => {
  const handleClick = () => {
    if (show === "social-icons") setShow("show-icons");
    else {
      setShow("social-icons");
    }
  };

  const [show, setShow] = useState("social-icons");

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <IoLogoDesignernews className="logo" />
          <button className="nav-toggle" onClick={handleClick}>
            <IoIosList />
          </button>
        </div>
        <div className="link-container">
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
        <ul className={show}>
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
