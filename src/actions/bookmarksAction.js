import { BOOKMARKS } from "./types";

const bookmarkslist = dispatch => {
  const token = localStorage.getItem("token");
  return fetch("https://ah-backend-thor.herokuapp.com/api/bookmarks/", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    }
  })
    .then(response => response.json())
    .then(value => {
      dispatch({ type: BOOKMARKS, payload: value });
    })
    .catch(error => error);
};

export default bookmarkslist;
