/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-assign */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import runFetch from "./followActionHelpers";

export const unfollowUrl = followedUsername =>(`https://ah-backend-thor.herokuapp.com/api/profiles/${followedUsername}/unfollow`);


function unFollow(followedUsername){

  const objectForfetch = {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`
    },
    body: {}
  };
  return (dispatch)=>{
    runFetch(dispatch, followedUsername, unfollowUrl,objectForfetch, "user", "UNFOLLOW", "UNFOLLOW_ERROR");

  };
};

export default unFollow;
