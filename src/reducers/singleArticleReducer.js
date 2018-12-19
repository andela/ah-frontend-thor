const intialState = {
  article: []
};

export default function (state = intialState, action) {
  switch (action.type) {
  case "GET_SINGLE_ARTICLE":
    return {
      ...state,
      article: action.payload
    };
  default:
    return state;
  }
}
