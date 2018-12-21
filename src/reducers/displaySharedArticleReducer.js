import { DISPLAY_ACTION } from "../actions/types";

const initialState = {
  display : {}
};

export default function(state = initialState, action) {
  switch (action.type) {
  case DISPLAY_ACTION:
    return {
      ...state,
      display: action.payload
    };
  default:
    return state;
  }
}
