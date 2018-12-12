import React from "react";
import { NavLink } from "react-router-dom";
import ProfileImage from "./ProfileImage";

const Header = () => (
  <header>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark unique-color-dark scrolling-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <strong>Author's Haven</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="articles.html">
                Articles <span className="sr-only" />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <form className="form-inline">
                <div className="md-form my-1">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
              </form>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="navbar-brand">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="navbar-brand">
                Signup
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Profile"} className={"navbar-brand"}>
                <ProfileImage />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
export default Header;
