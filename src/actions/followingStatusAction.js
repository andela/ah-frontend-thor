/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-assign */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import runFetch from "./followActionHelpers";


export function followStatusUrl(followedUsername){
  return (`https://ah-backend-thor.herokuapp.com/api/profiles/${followedUsername}/followers`);
};

function followStatus(followedUsername){

  const object = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`
    },
  };
  return (dispatch)=>{
    runFetch(dispatch, followedUsername, followStatusUrl,object, "results", "FOLLOW_STATUS", "FOLLOW_STATUS_ERROR");

  };
};

export default followStatus;
