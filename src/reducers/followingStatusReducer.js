/* eslint-disable no-fallthrough */
/* eslint-disable consistent-return */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-lone-blocks */

import {alert} from "../actions/loginActions";

const followingStatusChecker = (state, action) => {
  switch (action.type) {
  case "FOLLOWING_STATUS":{

    if (action.payload) {
      return {
        ...state,
        results: action.payload.results
      };
    }};

  case "FOLLOWING_STATUS_ERROR":{
    if (action.payload) {
      alert("error", action.payload, null, null, null);
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
  results: {}
};

export default (state = initialState, action) => (followingStatusChecker(state, action));
