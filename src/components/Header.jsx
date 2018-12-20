/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { NavLink } from "react-router-dom";
import ProfileImage from "./ProfileImage";
import SearchForm from "../containers/search/SearchForm";

const Header = () => (
  <header>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark unique-color-dark scrolling-navbar">
      <div className="container">
        <NavLink to="/home" className="navbar-brand">
          <strong>Author's Haven</strong>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <SearchForm />
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
