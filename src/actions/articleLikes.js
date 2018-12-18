import {
  ARTICLE_LIKES,
  ARTICLE_DISLIKES,
  ARTICLE_LIKES_MESSAGE
} from "./types";

const token = localStorage.getItem("token");
export const articleLikes = (id, data) => dispatch => {
  // const token = localStorage.getItem("token");
  return fetch(
    `https://ah-backend-thor.herokuapp.com/api/articles/${id}/like_status`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      },
      body: JSON.stringify(data)
    }
  )
    .then(response => response.json())
    .then(res => {
      dispatch({ type: ARTICLE_LIKES_MESSAGE, payload: res });
      // window.location.reload()
    })
    .catch(error => {
      dispatch({ type: "ARTICLE_FAILURE" });
      error;
    });
};

export const sumArticleLikes = id => dispatch => {
  return fetch(
    `https://ah-backend-thor.herokuapp.com/api/articles/${id}/like_status`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      }
    }
  )
    .then(response => response.json())
    .then(res => {
      let dislikeCount = 0;
      let likeCount = 0;
      res.map(row => {
        if (row.like_status == "like") {
          likeCount += 1;
          dispatch({ type: ARTICLE_LIKES, payload: likeCount });
        } else if (row.like_status == "dislike") {
          dislikeCount += 1;
          dispatch({ type: ARTICLE_DISLIKES, payload: dislikeCount });
        }
      });
    })
    .catch(error => error);
};


export const articleLikesUpdates = (id, data) => dispatch => {
  // const token = localStorage.getItem("token");
  return fetch(
    `https://ah-backend-thor.herokuapp.com/api/articles/${id}/like_status`,
    {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      },
      body: JSON.stringify(data)
    }
  )
    .then(response => response.json())
    .then(res => {
      dispatch({ type: ARTICLE_LIKES_MESSAGE, payload: res });
    })
    .catch(error => error);
};
