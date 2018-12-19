/* eslint-disable no-param-reassign */
import { SOCIAL_LOGIN } from "../actions/types";
import { alert } from "../actions/loginActions";

const initialUserState = {
  isLoggedIn: false,
  user: null,
  token: null
};
let data;

const social = (state = initialUserState, action) => {
  switch (action.type) {
  case SOCIAL_LOGIN:{
    const { token, user } = action.payload;
    if (token){
      data = { user: user.username, isLoggedIn: true, token: token };
      alert("success", null, data.user, data.token, "/");
    }else{
      data = { user: user.username, isLoggedIn: true, token: user.token };
      alert("success", null, data.user, data.token, "/");
    }
    return data;
  }
  default:
    return state;
  }
};
export default social;
