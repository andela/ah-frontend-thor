/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-assign */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import toastr from "toastr";

export const loginUrl = "https://ah-backend-thor.herokuapp.com/api/users/login/";


function storeDataToast(username, token, url){
  toastr.success(`Logging in as ${username}!`);
  localStorage.setItem("token", token);
  localStorage.setItem("username", username);
  window.location.replace(url);
};

function toastSuccessStoreData(type, errorMsg , username, token, url){
  type==="success" && !errorMsg && storeDataToast( username, token, url);
};

function toastError(type, errorMsg){
  type === "error" && errorMsg ? toastr.error(errorMsg): null;
};
function toastSuccess(type, errorMsg, url){
  type === "success" ? toastr.success(errorMsg) && url && setTimeout(() => window.location.replace(url), 3000): toastError(type, errorMsg);
};
export const alert=(type,errorMsg,username, token, url)=>(
  type === "error" || "success"  && !username && !token ? toastSuccess(type, errorMsg, url):
    toastSuccessStoreData(type, errorMsg, username, token, url)

);

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
