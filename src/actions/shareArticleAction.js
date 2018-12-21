import { SHARE_ARTICLE } from "./types";

export const ShareArticleFunction = (slug, mediaType) => dispatch => {
  const token = localStorage.getItem("token");

  return fetch(`https://ah-backend-thor.herokuapp.com/api/articles/${slug}/${mediaType}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${token}`
    }
  })
    .then(res => res.json())
    .then(shareLink => {
      dispatch({
        type: SHARE_ARTICLE,
        payload: shareLink
      });
    });
};

export default ShareArticleFunction;
