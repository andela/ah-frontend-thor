import articlesReducer from "../../src/reducers/articlesReducer";

const intialState = {
  articles:[]
};

describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const action = {type:"GET_ALL_ARTICLES", payload:{articles:[{"author":"chucky","title":"how to code"}]}};
    expect(articlesReducer(undefined,action)) !== (intialState);
  });
});
