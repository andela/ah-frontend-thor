import { SHARE_ARTICLE} from "../actions/types";

const initialState = {
  link: {}
};


export default function(state = initialState, action) {
  switch (action.type) {
  case SHARE_ARTICLE:
    return {
      ...state,
      link: action.payload
    };

  default:
    return state;
  }
}
