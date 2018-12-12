/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-indent */
import { Route, BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import React from "react";
import Home from "./Home";
import Login from "../containers/Login";
import signUp from "./signup/SignUp";
import Root from "./Root";
import ForgotPasswordPage from "../containers/resetPassword/ForgotPasswordContainer";
import ChangePasswordPage from "../containers/resetPassword/ChangePasswordContainer";

import Profile from "../containers/Profile/Profile";
import EditProfile from "../containers/Profile/EditProfile";
import "../assets/css/styles.css";
const AppRouter = () => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Root>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={signUp} />
            <Route path="/home" component={Home} />
            <Route path="/forgot_password" component={ForgotPasswordPage} />
            <Route path="/update_password" component={ChangePasswordPage} />
            <Route path="/profile" component={Profile} />
            <Route path="/editprofile" component={EditProfile} />
          </div>
        </Root>
      </React.Fragment>
    </Router>
  </Provider>
);
export default AppRouter;
