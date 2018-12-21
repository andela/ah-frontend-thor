// contains all teh reducers of the app
import { combineReducers } from "redux";

import signUpReducer from "./signUpReducer";
import profileReducer from "./profileReducer";
import loginReducer from "./loginReducer";
import social from "./socialReducer";
import userVerifiedReducer from "./emailVerification";
import getAllArticlesReducer from "./articlesReducer";
import singleArticleReducer from "./singleArticleReducer";
import searchReducer from "./searchReducer";
import listReducer from "./bookmarksReducer";
import {updateArticleReducer, articleReducer} from "./articleReducer";
import shareArticleReducer from "./shareArticleReducer";
import displaySharedArticleReducer from "./displaySharedArticleReducer";


export default combineReducers({
  signUpReducer,
  auth: loginReducer,
  profile: profileReducer,
  social,
  articleReducer,
  userVerifiedReducer,
  articles: getAllArticlesReducer,
  article: singleArticleReducer,
  search: searchReducer,
  listReducer,
  updateArticleReducer,
  shareLink: shareArticleReducer,
  display: displaySharedArticleReducer
});
