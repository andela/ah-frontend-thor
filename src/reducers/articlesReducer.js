const intialState = {
  articles: [],
  loading:true
};

export default function (state = intialState, action) {
  switch (action.type) {
  case "GET_ALL_ARTICLES":
    return {
      ...state,
      articles: action.payload,
      loading:false
    };
  default:
    return state;
  }
}
