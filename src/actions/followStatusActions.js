/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-assign */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */


export const followingStatusUrl = followingUsername =>(`https://ah-backend-thor.herokuapp.com/api/profiles/${followingUsername}/following`);


export const runFetch =(dispatch, followingUsername, fetchObject)=> fetch(
  followingStatusUrl(followingUsername),
  fetchObject
)
  .then(res => (
    res.json().then(data => ((res.ok && Promise.resolve(data)) || (!res.ok && Promise.reject(data))))
  ))
  .then(data=> {
    if ("results" in data) {

      dispatch({
        type:"FOLLOWING_STATUS",
        payload: data});
    }})
  .catch( error => {
    dispatch({
      type:"FOLLOWING_STATUS_ERROR",
      payload: typeof error === "string" ? error.errors || error.error : error.errors.error[0]} );
  });

const followingStatus = (followingUsername) => {

  const fetchObject = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`
    },
  };
  return (dispatch)=>{
    runFetch(dispatch, followingUsername, fetchObject);

  };
};

export default followingStatus;
