const userVerified = token => dispatch =>
  fetch(`https://ah-backend-thor.herokuapp.com/api/users/update/${token}`, {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .then(value => {
      dispatch({
        type: "USER_VERIFIED",
        payload: value
      });
    })
    .catch(error => error);

export default userVerified;
