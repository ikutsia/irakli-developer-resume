// NavigationBar.js

import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  console.log("Navbar rendered");
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Resume">Resume</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </nav>
  );
};

export default Navbar;
