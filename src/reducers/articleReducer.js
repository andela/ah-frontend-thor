/* eslint-disable no-unused-vars */
import { POST_ARTICLE, PROFILE_ARTICLES, GET_ARTICLE_BY_ID, UPDATE_ARTICLE, UPDATE_FAIL } from "../actions/types";
import { alert } from "../actions/loginActions";

const initialState = {
  articles: [],
  article: {}
};

export const articleReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
  case POST_ARTICLE:
    alert("success", "Article Successfully Created", null, null, "/");
    return { ...state, article: payload };
  case PROFILE_ARTICLES:{
    return { ...state, articles: payload}; }
  case GET_ARTICLE_BY_ID:{ 
    return { ...state, articles: payload }; }
  case UPDATE_ARTICLE:{
    alert("success", "Article successfully Updated", null, null, "/Profile");
    return { ...state, article: payload }; }
  default:
    return state;
  }
};

export const updateArticleReducer = (state = initialState, action) =>{
  const { payload } = action;
  switch (action.type) {
  case UPDATE_FAIL:{
    alert("error", "Error Please make sure all required fields are filled", null, null, null);
    return { ...state, article: payload }; }
  default:
    return state;
  }
};
