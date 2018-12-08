/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-assign */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */


export const followStatusUrl = followedUsername =>(`https://ah-backend-thor.herokuapp.com/api/profiles/${followedUsername}/followers`);

export const runFetch =(dispatch, followedUsername, fetchObject)=> fetch(
  followStatusUrl(followedUsername),
  fetchObject
)
  .then(res => (
    res.json().then(data => ((res.ok && Promise.resolve(data)) || (!res.ok && Promise.reject(data))))
  ))
  .then(data=> {
    if ("results" in data) {
      dispatch({
        type:"FOLLOW_STATUS",
        payload: data});
    }})
  .catch( error => {
    dispatch({
      type:"FOLLOW_STATUS_ERROR",
      payload: typeof error === "string" ? error.errors || error.error : error.errors.error[0]} );
  });

const followStatus = (followedUsername) => {

  const fetchObject = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`
    },
  };
  return (dispatch)=>{
    runFetch(dispatch, followedUsername, fetchObject);

  };
};

export default followStatus;
