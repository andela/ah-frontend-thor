import toastr from "toastr";

import {
  ARTICLE_LIKES,
  ARTICLE_DISLIKES,
  ARTICLE_LIKES_MESSAGE
} from "../actions/types";

const likeState = {
  likes: 0,
  dislikes: 0,
  message: ""
};

const likeReducer = (state = likeState, action) => {
  const { payload } = action
  switch (action.type) {
    case ARTICLE_LIKES:
      return {
        ...state,
        likes: payload
      };
    case ARTICLE_DISLIKES: {
      return {
        ...state,
        dislikes: payload
      };
    }
    case ARTICLE_LIKES_MESSAGE:
      toastr.error(payload.error);
      return {
        ...state,
        message: payload
      };
    default:
      return state;
  }
};

export default likeReducer;
