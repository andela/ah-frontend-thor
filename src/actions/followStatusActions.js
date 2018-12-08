/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-assign */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import runFetch from "./followActionHelpers";


export const followingStatusUrl = followingUsername =>(`https://ah-backend-thor.herokuapp.com/api/profiles/${followingUsername}/following`);


const followingStatus = (followingUsername) => {

  const objectFetch = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`
    },
  };
  return (dispatch)=>{
    runFetch(dispatch, followingUsername, followingStatusUrl,objectFetch, "results", "FOLLOWING_STATUS", "FOLLOWING_STATUS_ERROR");

  };
};

export default followingStatus;
