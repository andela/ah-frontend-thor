import likeReducer from "../../src/reducers/articleLikesReducer";

describe("article likes reducer", () => {
  it("should return initial state", () => {
    expect(likeReducer(undefined, {})).toEqual({
      likes: 0,
      dislikes: 0,
      message: ""
    });
  });

  it("receive all likes", () => {
    expect(
      likeReducer([], {
        type: "ARTICLE_LIKES",
        payload: 1
      })
    ).toEqual({
      likes: 1
    });
  });

  it("receive all dislikes", () => {
    expect(
      likeReducer([], {
        type: "ARTICLE_DISLIKES",
        payload: 1
      })
    ).toEqual({
      dislikes: 1
    });
  });

  it("post a like/dislike", () => {
    expect(likeReducer([], {
        type: "ARTICLE_LIKES_MESSAGE",
        payload: "success"
      })).toEqual({ message: "success" });
  });
});
