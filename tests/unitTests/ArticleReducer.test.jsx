import articleReducer from "../../src/reducers/articleReducer";
import { POST_ARTICLE } from "../../src/actions/types";

describe("socialLoginReducer", () => {
  it("has a default state", () => {
    expect(articleReducer(undefined, { type: "unexpected" })).toEqual({
      article: {},
      articles: []
    });
  });

  it("should update state on POST_ARTICLE action type", () => {
    expect(
      articleReducer(undefined, {
        type: POST_ARTICLE,
        payload: { article: {}}
      })
    ).toEqual({
      article: {article: {}}, articles: []
    });
  });
});
