/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-indent */
import { Route, BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import React from "react";
import Home from "./Home";
import Login from "../containers/Login";
import Root from "./Root";
import store from "../store";

const AppRouter = () => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Root>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
          </div>
        </Root>
      </React.Fragment>
    </Router>
  </Provider>
);

export default AppRouter;
