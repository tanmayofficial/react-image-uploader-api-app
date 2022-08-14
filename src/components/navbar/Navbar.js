import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-white mb-3">
      <div className="container-fluid d-flex justify-content-center text-center">
        <a className="navbar-brand custom-brand" href="#">
          IMAGER
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
