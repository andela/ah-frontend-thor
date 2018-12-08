/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-assign */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */


export const unfollowUrl = followedUsername =>(`https://ah-backend-thor.herokuapp.com/api/profiles/${followedUsername}/unfollow`);


export const runFetch =(dispatch, followedUsername, fetchObject)=> fetch(
  unfollowUrl(followedUsername),
  fetchObject
)
  .then(res => (
    res.json().then(data => ((res.ok && Promise.resolve(data)) || (!res.ok && Promise.reject(data))))
  ))
  .then(data=> {
    if ("user" in data) {
      dispatch({
        type:"UNFOLLOW",
        payload: data});
    }})
  .catch( error => {
    dispatch({
      type:"UNFOLLOW_ERROR",
      payload: typeof error === "string" ? error.errors || error.error : error.message} );
  });

const unFollow = (followedUsername) => {

  const fetchObject = {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`
    },
  };
  return (dispatch)=>{
    runFetch(dispatch, followedUsername, fetchObject);

  };
};

export default unFollow;
