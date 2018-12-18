import likeReducer from "../../src/reducers/articleLikesReducer";

describe("Like articles reducer", () => {
  it("should return initial state", () => {
    expect(likeReducer(undefined, {})).toEqual({
      likes: 0,
      dislikes: 0,
      message: ""
    });
  });

  it("post likes/dislikes", () => {
    expect(likeReducer([], {
        type: "ARTICLE_LIKES_MESSAGE",
        payload: "You have liked/disliked this article"
      })).toEqual({ message: "You have liked/disliked this article" });
  });
  it("get likes/dislikes", () => {
    expect(likeReducer([], {
      type: "ARTICLE_LIKES",
      payload: 1
    })).toEqual({ likes: 1 });
  });
  it("get likes/dislikes", () => {
    expect(likeReducer([], {
        type: "ARTICLE_DISLIKES",
        payload: 1
      })).toEqual({ dislikes: 1 });
  });
});
