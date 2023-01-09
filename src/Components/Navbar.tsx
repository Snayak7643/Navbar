import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoDesignernews, IoIosList } from "react-icons/io";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <IoLogoDesignernews className="logo" />
          <button className="nav-toggle" onClick={() => setShow(!show)}>
            <IoIosList />
          </button>
        </div>
        {show === true && (
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
        )}
        {show === true && (
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
