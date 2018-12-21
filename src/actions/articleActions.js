/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import {
  POST_ARTICLE,
  PROFILE_ARTICLES,
  GET_ARTICLE_BY_ID,
  UPDATE_ARTICLE,
  UPDATE_FAIL
} from "./types";

const createArticles = articleData => dispatch => {
  const data = { article: articleData };
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
    .then(article =>
      dispatch({
        type: POST_ARTICLE,
        payload: article
      })
    );
};

const getAuthorArticles = () => dispatch => {
  const user = localStorage.getItem("username");
  return fetch(
    `https://ah-backend-thor.herokuapp.com/api/articles/?author_name=${user}`
  )
    .then(res => res.json())
    .then(articles =>
      dispatch({
        type: PROFILE_ARTICLES,
        payload: articles.results
      })
    );
};

const getArticleById = id => dispatch => 
  fetch(`https://ah-backend-thor.herokuapp.com/api/articles/${id}`)
    .then(res => res.json())
    .then(articles =>
      dispatch({
        type: GET_ARTICLE_BY_ID,
        payload: articles
      })
    );

const updateArticle = (articleData, id) => dispatch => {
  const data = { article: articleData };
  const token = localStorage.getItem("token");
  return fetch(`https://ah-backend-thor.herokuapp.com/api/articles/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      const resp = res.json();
      if (res.status !== 200) {
        resp.then(article =>
          dispatch({ type: UPDATE_FAIL, payload: article }));
      } else {
        resp.then(article =>
          dispatch({ type: UPDATE_ARTICLE, payload: article }));
      }
    });
};

export { getAuthorArticles };
export { getArticleById };
export { createArticles };
export { updateArticle };
