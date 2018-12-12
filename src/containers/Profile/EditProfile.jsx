import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import toastr from "toastr";
import { editProfile, saveImage } from "../../actions/profileAction";

export class EditProfile extends Component {
  state = {
    username: localStorage.getItem("username"),
    bio: localStorage.getItem("bio"),
    image: localStorage.getItem("image")
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.props.image) {
      this.setState({
        image: this.props.image
      });
      const profileData = {
        bio: this.state.bio,
        image: this.props.image
      };
      this.props.editProfile(profileData);
    } else {
      const profileData = {
        bio: this.state.bio,
        image: this.state.image
      };
      this.props.editProfile(profileData);
    }
  };

  uploadImage = event => {
    this.setState({
      image:
        "https://res.cloudinary.com/dksxmwjqs/image/upload/v1544619488/em3oq7jnnea8bsqkets3.gif"
    });
    const imagePreview = document.getElementById("img-preview");

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.CLOUDNARY_UPLOAD_PRESET);
    this.props.saveImage(formData, imagePreview);
  };

  editDataHeading() {
    return (
      <div className="card-header unique-color-dark  white-text text-center mt-0 py-4">
        <span>My Profile</span>
      </div>
    );
  }

  textAreaInput() {
    return (
      <textarea
        type="text"
        name="bio"
        id="bio"
        onChange={this.onChange}
        required
        className="form-control font-weight-light edit-profile-text-area"
        value={this.state.bio}
        required
      />
    );
  }

  uploadImageDiv() {
    return (
      <div className="card profile-card profile-card-image">
        <img src={this.state.image} className="card-image" id="img-preview" />
        <label className="file-upload-container" htmlFor="file-upload">
          <input
            name="file-upload"
            id="file-upload"
            type="file"
            onChange={this.uploadImage}
            className="image-input"
          />
          <div className="form-control">Click to select an Image</div>
        </label>
      </div>
    );
  }

  editSaveButton() {
    return (
      <button
        id="saveProfile"
        className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0 "
        type="submit"
      >
        Save
      </button>
    );
  }

  showEditData() {
    return (
      <div className="card-body">
        <h4 className="card-title">
          <div className="card-body font-weight-light">
            <span>Bio</span>
          </div>
          <br />
          <div>{this.textAreaInput()}</div>
          <br />
          <div className="card-body font-weight-light">
            <span>Image url</span>
          </div>
          <br />
          <div>{this.uploadImageDiv()}</div>
        </h4>
        <hr />
        <div className="text-center mt-4">
          <div>{this.editSaveButton()}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container ">
        <section className="mt-4 section-profile-edit">
          <div className="row">
            <div className="col-md-12 ">
              <div className="card cloudy-knoxville-gradient mb-4 wow fadeIn">
                <div>{this.editDataHeading()}</div>
                <form onSubmit={this.onSubmit}>
                  <div>{this.showEditData()}</div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  image: state.profile.image
});
export default connect(
  mapStateToProps,
  { editProfile, saveImage }
)(EditProfile);
