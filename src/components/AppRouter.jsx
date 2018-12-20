/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-indent */
import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store";
import Home from "./Home";
import Login from "../containers/Login";
import signUp from "./signup/SignUp";
import Root from "./Root";
import ForgotPasswordPage from "../containers/resetPassword/ForgotPasswordContainer";
import ChangePasswordPage from "../containers/resetPassword/ChangePasswordContainer";

import Profile from "../containers/Profile/Profile";
import EditProfile from "../containers/Profile/EditProfile";
import "../assets/css/styles.css";
import SignOut from "./SignOut";
import PostArticle from "./article/PostArticle";
import UpdateUserInfo from "../containers/EmailVerification";
import Bookmarks from "../containers/bookmarks/Bookmarks";

import Article from "../containers/viewArticles/articleView";
import SearchResults from "../containers/search/SearchResults";
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
            <Route path="/signout" component={SignOut} />
            <Route path="/post_article" component={PostArticle} />
            <Route path="/updateuser" component={UpdateUserInfo} />
            <Route path="/article" component={Article} />
            <Route
              path="/searchresults/:type/:searchData"
              component={SearchResults}
            />
            <Route path="/bookmarkslist" component={Bookmarks} />
          </div>
        </Root>
      </React.Fragment>
    </Router>
  </Provider>
);
export default AppRouter;
