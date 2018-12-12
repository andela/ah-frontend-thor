import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProfile } from "../actions/profileAction";
import PropTypes from "prop-types";
export class ProfileImage extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    const username = localStorage.getItem("username");
    if (username) {
      return (
        <div>
          <img
            src={this.props.profile.user.image}
            className="header-profile-image"
            alt="image"
          />
        </div>
      );
    } else {
      return "";
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
