// contains all teh reducers of the app
import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

export default combineReducers({
  auth: loginReducer
});
