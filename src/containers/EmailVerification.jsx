import React, { Component } from "react";
import userVerified from "../actions/userVerification";
import { connect } from "react-redux";


export class UpdateUserInfo extends Component {
  componentDidMount() {
    const url = window.location.search;
    const token = url.replace("?token=", "");

    const { updateUser } = this.props;

    updateUser(token);
  }
  render() {
    return (
      <div />
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  updateUser: token => dispatch(userVerified(token))
});

export default connect(
  null,
  mapDispatchToProps
)(UpdateUserInfo);
