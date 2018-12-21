const runFetch =(dispatch, followedUsername, urlFunction,fetchObject, check, type1, type2)=> fetch(
  urlFunction(followedUsername),
  fetchObject
)
  .then(res => (
    res.json().then(data => ((res.ok && Promise.resolve(data)) || (!res.ok && Promise.reject(data))))
  ))
  .then(data=> {
    if (check in data) {
      dispatch({
        type: type1,
        payload: data});
    }})
  .catch( error => {
    dispatch({
      type: type2,
      payload: typeof error === "string" ? error.errors || error.error : error.errors.error[0]} );
  });

export default runFetch;
