/* eslint-disable no-self-assign */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import toastr from "toastr";

export const loginUrl = "https://ah-backend-thor.herokuapp.com/api/users/login/";

export const alert=(type,errorMsg,username, token, url)=>{
  if(type === "error" || "success"  && !username && !token){
    type === "success" ? toastr.success(errorMsg) && setTimeout(() => window.location.replace(url), 3000): toastr.error(errorMsg);
  }
  else if(type==="success" && !errorMsg){
    toastr.success(`Logging in as ${username}!`);
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    setTimeout(() => window.location.replace(url), 3000);
  };

};

export const errorAlert =(type,errorMsg)=>((alert(type,errorMsg,null,null)));

export const runFetch =(dispatch, fetchObject)=> fetch(
  loginUrl,
  fetchObject
)
  .then(res => (
    res.json().then(data => ((res.ok && Promise.resolve(data)) || (!res.ok && Promise.reject(data))))
  ))
  .then(data=> {
    if ("user_token" in data.user) {
      dispatch({
        type:"LOGIN",
        payload: data.user});
    }})
  .catch( error => {
    dispatch({
      type:"LOGIN_ERROR",
      payload: typeof error === "string" ? error.errors : error.errors.error[0]});
  });

const login = (loginData) => {

  const user = {
    user: loginData
  };

  const fetchObject = {
    method: "POST",
    headers: { "content-type": "application/json"},
    body: JSON.stringify(user)
  };
  return (dispatch)=>{
    runFetch(dispatch, fetchObject);

  };
};

export default login;
