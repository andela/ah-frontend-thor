import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
import { SingleArticleAction } from "../../src/actions/singleArticleAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe("async get one article", () => {
  afterEach( () => {
    fetchMock.restore();
  });

  it("gets one article from the api", () => {
    fetchMock.getOnce("https://ah-backend-thor.herokuapp.com/api/articles/1", {
      body:{article:["i write code", "how to be wirkd class"] },
      headers:{"content-type":"application/json"}
    });
  const expectedAction = [{
    type:"GET_SINGLE_ARTICLE",
    payload:{article:["i write code", "how to be wirkd class"] }
  }];
  const store = mockStore({article:[ ]});
  return store.dispatch(SingleArticleAction(1)).then(
    ()=> {
      expect(store.getActions()).toEqual(expectedAction);
    });
});

});
