import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="main-nav">
      <nav>
        <ul className="nav-bar">
          <div className="">
            <Link to="/" className="link">
              ExerTracker
            </Link>
          </div>
          <li>
            <Link to="/" className="link">
              Exercises
            </Link>
          </li>
          <li>
            <Link to="/create" className="link">
              Create Exercise
            </Link>
          </li>
          <li>
            <Link to="/user" className="link">
              Create User
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
