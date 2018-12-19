/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { POST_ARTICLE } from "./types";

const createArticles = (articleData) => dispatch => {
  const data = {article:articleData};
  const token = localStorage.getItem("token");
  return fetch("https://ah-backend-thor.herokuapp.com/api/articles/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(article => dispatch({
      type: POST_ARTICLE,
      payload: article
    })).catch((error) => {
      console.log("There has been a problem with your fetch operation: ", error.message);
    });
};
export default createArticles;
