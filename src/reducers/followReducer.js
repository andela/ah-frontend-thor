/* eslint-disable no-fallthrough */
/* eslint-disable consistent-return */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-lone-blocks */

import {alert} from "../actions/loginActions";

const followChecker = (state, action) => {
  switch (action.type) {
  case "FOLLOW_USER":{

    if (action.payload) {
      window.location.reload();
      return {
        ...state,
        followStatus: action.payload
      };
    }};

  case "FOLLOW_ERROR":{
    if (action.payload) {
      alert("error", action.payload, null, null, null);
      return {
        ...state,
        errors: action.payload
      };
    }};

  default:
    return state;
  }
};

const initialState = {
  followedByUser: [],
  errors: "",
  data: null
};

export default (state = initialState, action) => (followChecker(state, action));
