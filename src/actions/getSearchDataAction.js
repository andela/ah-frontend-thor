import {
  GET_SEARCH_DATA
} from "./types";

export const getSearchData = (type,fetchData) => dispatch => fetch(
  `https://ah-backend-thor.herokuapp.com/api/articles/?${type}=${fetchData}`,

  {
    headers: {
      "Content-type": "application/json"
    }
  }
)
  .then(res => res.json())
  .then(data => {
    dispatch({
      type:  GET_SEARCH_DATA,
      payload: data.results
    });
  });

export default getSearchData;
