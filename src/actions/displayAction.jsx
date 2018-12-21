import { DISPLAY_ACTION } from "./types";

export const displayAction = (slug) => dispatch =>{
return fetch(
  `https://ah-backend-thor.herokuapp.com/api/articles/${slug}`,
  {
    headers: {
      "Content-type": "application/json",
      'Accept': 'application/json'
    }
  }
)
.then(res => res.json())
    .then(displayData => {
      dispatch({
        type: DISPLAY_ACTION,
        payload: displayData
      });
    });
};
