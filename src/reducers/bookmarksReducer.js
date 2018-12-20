export const bookmarksState = {
  list: []
};

const listReducer = (state = bookmarksState, action) => {
  switch (action.type) {
  case "BOOKMARKS_LIST":
    return {
      ...state,
      list: action.payload
    };
  default:
    return state;
  }
};

export default listReducer;
