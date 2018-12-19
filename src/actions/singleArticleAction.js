/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-named-as-default */
export const SingleArticleAction = (id) => dispatch => fetch(`https://ah-backend-thor.herokuapp.com/api/articles/${id}`)
  .then(res => res.json())
  .then(article => {
    dispatch({
      type: "GET_SINGLE_ARTICLE",
      payload: article
    });
  });
