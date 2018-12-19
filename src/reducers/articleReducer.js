import { POST_ARTICLE } from "../actions/types";
import { alert } from "../actions/loginActions";

const initialState = {
  articles: [],
  article: {}
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    
  case POST_ARTICLE:
    alert("success", "Article Successfully Created", null, null, "/");
    return {
      ...state,
      article: action.payload
    };
  default:
    return state;
  }
};
export default articleReducer;
