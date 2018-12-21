/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import {
  POST_ARTICLE,
  PROFILE_ARTICLES,
  GET_ARTICLE_BY_ID,
  UPDATE_ARTICLE,
  UPDATE_FAIL,
  DELETE_ARTICLE,
  DELETE_FAIL
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

const fetchHelper = (id, methods, body, status, tokenVariable, actionType1, actionType2) =>dispatch=>
  fetch(`https://ah-backend-thor.herokuapp.com/api/articles/${id}`, {
    method: methods,
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${tokenVariable}`
    },
    body: body
  })
    .then(res => {
      const resp = res.json();
      if (res.status !== status) {
        resp.then(article =>
          dispatch({ type: actionType1, payload: article }));
      } else {
        resp.then(article =>
          dispatch({ type: actionType2, payload: article }));
      }
    });

const updateArticle = (articleData, id) => {
  const data = { article: articleData };
  const token = localStorage.getItem("token");
  return fetchHelper(id, "PATCH", JSON.stringify(data), 200, token, UPDATE_FAIL, UPDATE_ARTICLE);
  
};

const deleteArticle = (id) => {
  const token = localStorage.getItem("token");
  return fetchHelper(id, "DELETE", {}, 204, token, DELETE_ARTICLE, DELETE_FAIL);
};

export { getAuthorArticles };
export { getArticleById };
export { createArticles };
export { updateArticle };
export { deleteArticle };
