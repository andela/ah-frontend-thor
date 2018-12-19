/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-named-as-default */
import { GET_ALL_ARTICLES } from "./types";

const ARTICLES_URL = "https://ah-backend-thor.herokuapp.com/api/articles/";

export const GetAllArticlesAction = (dispatch) => (fetch(ARTICLES_URL)
  .then(res => res.json())
  .then(articles => {
    dispatch({
      type: GET_ALL_ARTICLES,
      payload: articles
    });
  }));
