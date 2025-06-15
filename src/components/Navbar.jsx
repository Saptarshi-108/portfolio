import React from "react";
import {Link} from react-router-dom;

const Navbar = () => {
  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-layout">
          <div className="nav-home">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
