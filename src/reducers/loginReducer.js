/* eslint-disable no-fallthrough */
/* eslint-disable consistent-return */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-lone-blocks */

import {errorAlert, alert} from "../actions/loginActions";

const loginChecker = (state, action) => {
  switch (action.type) {
  case "LOGIN":{
    if (action.payload) {
      alert("success", null, action.payload.username, action.payload.user_token, "/");
      return {
        ...state,
        token: action.payload.user_token
      };
    }};

  case "LOGIN_ERROR":{
    if (action.payload) {
      errorAlert("error", action.payload);
      return {
        ...state,
        errors: state.errors,
        errors: action.payload
      };
    }};

  default:
    return state;
  }
};

const initialState = {
  errors: "",
  user: null
};

export default (state = initialState, action) => (loginChecker(state, action));
