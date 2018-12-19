import React, { Component } from "react";
import toastr from "toastr";
import { connect } from "react-redux";
import SignUpAction from "../../actions/signUpAction";
import LayOut from "./SignUpHolder";


export class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };



  onFormSubmit = e => {
    e.preventDefault();
    const password = this.state.password;
    const confirmPassword = this.state.confirmPassword;

    if (password === confirmPassword) {
      this.props.signupAction(this.state);
    } else {
      toastr.error("passwords don't match ");
    }
  };

  render() {
    return <LayOut onFormSubmit={this.onFormSubmit} onChange={this.onChange} />;
  }
}

export const mapStateToProps = state =>
  ({
    item: state.signUpReducer.item,
    success: state.signUpReducer.success
  });

export const mapDispatchToProps = dispatch => ({
  signupAction: data => dispatch(SignUpAction(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
