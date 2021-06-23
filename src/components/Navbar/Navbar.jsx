import React from "react";
import NavItems from "../NavItems/NavItems";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarstyle">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <h6 className="navbar-brand">
            W E G A N
          </h6>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <NavItems link="/" name="Home"></NavItems>
                <NavItems link="/" name="About Us"></NavItems>
                <NavItems link="/" name="Products"></NavItems>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
