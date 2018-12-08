/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-assign */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import runFetch from "./followActionHelpers";


export const followUrl = followedUsername =>(`https://ah-backend-thor.herokuapp.com/api/profiles/${followedUsername}/follow`);

// export const runFetch =(dispatch, followedUsername, fetchObject)=> fetch(
//   followUrl(followedUsername),
//   fetchObject
// )
//   .then(res => (
//     res.json().then(data => ((res.ok && Promise.resolve(data)) || (!res.ok && Promise.reject(data))))
//   ))
//   .then(data=> {
//     if ("following_user" in data) {
//       dispatch({
//         type:"FOLLOW_USER",
//         payload: data});
//     }})
//   .catch( error => {
//     dispatch({
//       type:"FOLLOW_ERROR",
//       payload: typeof error === "string" ? error.errors || error.error : error.errors.error[0]} );
//   });

const follow = (followedUsername) => {

  const fetchObject = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`
    }
  };
  return (dispatch)=>{
    // runFetch(dispatch, followedUsername, fetchObject);
    runFetch(dispatch, followedUsername, followUrl,fetchObject, "following_user", "FOLLOW_USER", "FOLLOW_ERROR");

  };
};

export default follow;
