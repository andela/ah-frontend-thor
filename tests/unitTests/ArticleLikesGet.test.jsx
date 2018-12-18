import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
const tes = require("jest-fetch-mock");

import likeReducer from "../../src/reducers/articleLikesReducer";
import { sumArticleLikes } from "../../src/actions/articleLikes";
import {
  mapDispatchToProps,
  mapStateToProps,
  clickHandler
} from "../../src/containers/articleLikes/ArticleLikes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore();

describe("", () => {
  it("test successfully get all like/dislike an article", () => {
    const id = 2;
    fetchMock.getOnce(
      `https://ah-backend-thor.herokuapp.com/api/articles/${id}/like_status`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: "Token hello"
        },
        body: { like: 1 }
      },
      200
    );
    return store.dispatch(sumArticleLikes(2)).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });

});
