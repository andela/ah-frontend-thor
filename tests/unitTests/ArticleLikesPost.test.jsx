import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import likeReducer from "../../src/reducers/articleLikesReducer";
import {
  articleLikes,
  sumArticleLikes,
  articleLikesUpdates
} from "../../src/actions/articleLikes";
import {
  mapDispatchToProps,
  mapStateToProps,
  clickHandler
} from "../../src/containers/articleLikes/ArticleLikes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore();

describe("Article Likes/Dislikes", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("test successfully like/dislike an article", () => {
    const id = 1;
    const data = { like_status: "like" };
    fetchMock.post(
      `https://ah-backend-thor.herokuapp.com/api/articles/${id}/like_status`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: "Token likes"
        },
        body: JSON.stringify(data)
      }
    );

    return store.dispatch(articleLikes(1, data)).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: "ARTICLE_LIKES_MESSAGE",
          payload: { like_status: "like" }
        }
      ]);
    });
  });

  it("fetch fails to like article", () => {
    const data = "user";
    const id = 0;

    fetchMock.post(
      `https://ah-backend-thor.herokuapp.com/api/articles/${id}/like_status`,
      data
    );

    const expectedActions = [{ type: "ARTICLE_FAILURE" }];
    const store = mockStore({});

    console.log(store.dispatch(articleLikes(id, data)));
    return store
      .dispatch(articleLikes(id, data))
      .then(() =>
        expect(store.getActions()).toEqual(
          expect.objectContaining(expectedActions)
        )
      );
  });


});
