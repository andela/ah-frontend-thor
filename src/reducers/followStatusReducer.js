/* eslint-disable no-fallthrough */
/* eslint-disable consistent-return */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-lone-blocks */

import {alert} from "../actions/loginActions";

const followStatusChecker = (state, action) => {
  switch (action.type) {
  case "FOLLOW_STATUS":{
    if (action.payload) {
      return {
        ...state,
        results: action.payload.results
      };
    }};

  case "FOLLOW_STATUS_ERROR":{
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
  results: []
};

export default (state = initialState, action) => (followStatusChecker(state, action));
