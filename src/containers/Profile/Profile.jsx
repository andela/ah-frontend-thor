import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProfile } from "../../actions/profileAction";
import { Link } from "react-router-dom";
import PublishedArticles from "./PublishedArticles"

export class Profile extends Component {
  localStorageFunction() {
    if (this.props.profile.user) {
      const data = this.props.profile.user;
      localStorage.setItem("bio", data.bio);
      localStorage.setItem("image", data.image);
    }
    return "stored";
  }
  editButton() {
    return (
      <div className="text-center mt-4">
        <Link to={"/EditProfile"}>
          <button
            className="btn btn-outline-info btn-rounded  waves-effect z-depth-0 pull-right"
            type="submit"
          >
            Edit
          </button>
        </Link>
      </div>
    );
  }
  image() {
    return (
      <div className="avatar mx-auto text-center">
        <img
          src={this.props.profile.user.image}
          className="rounded-circle profile-image responsive-image"
          alt="image"
        />
      </div>
    );
  }
  bio() {
    return (
      <p>
        <i className="fa fa-quote-left" /> {this.props.profile.user.bio}
      </p>
    );
  }
  mainProfile() {
    return (
      <div className="card cloudy-knoxville-gradient mb-4 wow fadeIn">
        <div className="card-header unique-color-dark  white-text text-center mt-0 py-4">
          <span>My Profile</span>
        </div>
        <div>{this.image()}</div>
        <div className="card-body">
          <h4 className="card-title">{this.props.profile.user.profile_user}</h4>
          <hr />
          <div>{this.bio()}</div>
          <div>{this.editButton()}</div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchProfile();
  }
  showData() {
    if (this.props.profile.user) {
      this.localStorageFunction();
      return (
        <div className="mt-3 pt-3">
        <div className="container profile-container">
          <section className="mt-4 section-profile">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div>{this.mainProfile()}</div>
              </div>
              <PublishedArticles />
            </div>
          </section>
        </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.showData()}</div>;
  }
}

Profile.propTypes = {
  fetchProfile: PropTypes.func.isRequired
};
export const mapStateToProp = state => {
  return {
    profile: state.profile
  };
};

export default connect(
  mapStateToProp,
  { fetchProfile }
)(Profile);
