/* eslint-disable import/no-named-as-default */
// contains all teh reducers of the app
import { combineReducers } from "redux";

import followReducer from "./followReducer";
import signUpReducer from "./signUpReducer";
import profileReducer from "./profileReducer";
import loginReducer from "./loginReducer";
import social from "./socialReducer";
import articleReducer from "./articleReducer";
import userVerifiedReducer from "./emailVerification";
import getAllArticlesReducer  from "./articlesReducer";
import singleArticleReducer  from "./singleArticleReducer";
import searchReducer from "./searchReducer";
import listReducer from "./bookmarksReducer";
import followStatusReducer from "./followStatusReducer";
import unfollowReducer from "./unfollowReducer";
import followingStatusReducer from "./followingStatusReducer";

export default combineReducers({
  signUpReducer,
  auth: loginReducer,
  profile: profileReducer,
  social,
  articleReducer,
  userVerifiedReducer,
  articles:getAllArticlesReducer,
  article:singleArticleReducer,
  search: searchReducer,
  listReducer,
  followReducer,
  followStatusReducer,
  unfollowReducer,
  followingStatusReducer
});
