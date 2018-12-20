import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { fetchProfile } from "../actions/profileAction";

export class ProfileImage extends Component {
  state = {
    username: localStorage.getItem("username"),
    image:
      "https://res.cloudinary.com/dksxmwjqs/image/upload/v1545036678/ux5uy7dcbqpzu6hbsjku.jpg"
  };
  componentDidMount() {
    this.props.fetchProfile();
  }
  signedOut() {
    return (
      <div>
        <ul className="navbar-nav ml-auto">
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
        </ul>
      </div>
    );
  }

  signedIn = image => {
    return <div>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink to="/Profile" className="navbar-brand profile-header-name">
            Hi {this.state.username}
          </NavLink>
        </li>
          <li className="nav-item">
            <div className="dropdown show">
              <img src={image}
                className="header-profile-image dropdown-toggle"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false"
                alt="image" />
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <NavLink to="/post_article" className="dropdown-item">
                    Create Article
                </NavLink>
                <NavLink to="/bookmarkslist" className="dropdown-item">
                    Bookmarks
                </NavLink>
                <NavLink to="/signout" className="dropdown-item">
                    Logout
                </NavLink>
              </div>
            </div>
          </li>
        </ul>
      </div>;
  };

  render() {
    const user = localStorage.getItem("username");

    if (user && this.props.profile.user.image) {
      return <div>{this.signedIn(this.props.profile.user.image)}</div>;
    } else if (user && !this.props.profile.user.image) {
      return <div>{this.signedIn(this.state.image)}</div>;
    } else {
      return <div>{this.signedOut()}</div>;
    }
  }
}

ProfileImage.propTypes = {
  fetchProfile: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};
export default connect(
  mapStateToProps,
  { fetchProfile }
)(ProfileImage);
