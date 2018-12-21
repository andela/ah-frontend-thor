import {articleReducer, updateArticleReducer} from "../../src/reducers/articleReducer";
import { POST_ARTICLE, UPDATE_ARTICLE, UPDATE_FAIL, PROFILE_ARTICLES, GET_ARTICLE_BY_ID } from "../../src/actions/types";

describe("articleReducer", () => {
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
  it("should update state on UPDATE_ARTICLE action type", () => {
    expect(
      articleReducer(undefined, {
        type: UPDATE_ARTICLE,
        payload: { article: {}}
      })
    ).toEqual({
      article: {article: {}}, articles: []
    });
  });
  it("should update state on UPDATE_FAIL action type", () => {
    expect(
      updateArticleReducer(undefined, {
        type: UPDATE_FAIL,
        payload: { article: {}}
      })
    ).toEqual({
      article: {article: {}}, articles: []
    });
  });
  it("should update state on PROFILE_ARTICLES action type", () => {
    expect(
      articleReducer(undefined, {
        type: PROFILE_ARTICLES,
        payload: { article: {}}
      })
    ).toEqual(
      {article: {}, articles: {article: {}}}
    );
  });
  it("should update state on PROFILE_ARTICLES action type", () => {
    expect(
      articleReducer(undefined, {
        type: GET_ARTICLE_BY_ID,
        payload: { article: {}}
      })
    ).toEqual(
      {article: {}, articles: {article: {}}}
    );
  });
});
