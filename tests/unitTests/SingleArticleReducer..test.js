import singleArticleReducer from "../../src/reducers/singleArticleReducer";

const intialState = {
  article:[]
};

describe(" INITIAL_STATE ", () => {
  test("is an empty object", () => {
    const action = {type:"GET_ALL_ARTICLES"};
    expect(singleArticleReducer(undefined,action)).toEqual(intialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const action = {type:"GET_SINGLE_ARTICLE", payload:{articles:[{"author":"chucky","title":"how to code"}]}};
    expect(singleArticleReducer(undefined,action)) !== (intialState);
  });
});
