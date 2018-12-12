import expect from "expect";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import createArticles  from "../../src/actions/articleActions";
import { POST_ARTICLE } from "../../src/actions/types";


describe("SocialLogin action creators", () => {
  localStorage.setItem("token", "token");
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState ={ 
    articles: [],
    article:{}
  };
  const store = mockStore({...initialUserState});
  afterEach(() => {
    // eslint-disable-next-line no-undef
    fetchMock.restore();
  });

  it("authenticate user", () => {
    const data = { article: {} };
    // eslint-disable-next-line no-undef
    fetchMock.post("https://ah-backend-thor.herokuapp.com/api/articles/", data);
    const expectedActions = [{ type: POST_ARTICLE, payload: data }];
    return store.dispatch(createArticles(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
