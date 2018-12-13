import expect from "expect";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import {
  createArticles,
  getAuthorArticles,
  getArticleById,
  updateArticle
} from "../../src/actions/articleActions";

import {
  POST_ARTICLE,
  PROFILE_ARTICLES,
  GET_ARTICLE_BY_ID,
  UPDATE_FAIL,
  UPDATE_ARTICLE
} from "../../src/actions/types";

describe("post article action creators", () => {
  localStorage.setItem("token", "token");
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {
    articles: [],
    article: {}
  };
  const store = mockStore({ ...initialUserState });
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

describe("author articles action creators", () => {
  localStorage.setItem("token", "token");
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {
    articles: [],
    article: {}
  };
  const store = mockStore({ ...initialUserState });
  afterEach(() => {
    // eslint-disable-next-line no-undef
    fetchMock.restore();
  });
  test("should get Author articles", () => {
  // eslint-disable-next-line no-undef
    const user = "joshua";
    localStorage.setItem("username", user);

    fetchMock.get(
      `https://ah-backend-thor.herokuapp.com/api/articles/?author_name=${user}`,
      {
        status: 200,
        body: {}
      }
    );
    const expectedActions = [{ payload: undefined, type: PROFILE_ARTICLES }];
    return store.dispatch(getAuthorArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("fetch single article action creators", () => {
  localStorage.setItem("token", "token");
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {
    articles: [],
    article: {}
  };
  const store = mockStore({ ...initialUserState });

  afterEach(() => {
    // eslint-disable-next-line no-undef
    fetchMock.restore();
  });
  test("should get article by id", () => {
    // eslint-disable-next-line no-undef
    const idn = 2;
    fetchMock.get(`https://ah-backend-thor.herokuapp.com/api/articles/${idn}`, {
      status: 200,
      body: {}
    });

    const expectedActions = [{ payload: {}, type: GET_ARTICLE_BY_ID }];
    return store.dispatch(getArticleById(idn)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
describe("update article action creators", () => {
  localStorage.setItem("token", "token");
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {
    articles: [],
    article: {}
  };
  const store = mockStore({ ...initialUserState });
  afterEach(() => {
    // eslint-disable-next-line no-undef
    fetchMock.restore();
  });

  it("should update article", () => {
    const id = 2;
    const data = { article: {} };
    const token = "someToken";
    localStorage.setItem("token", token);
    // eslint-disable-next-line no-undef
    fetchMock.patch(`https://ah-backend-thor.herokuapp.com/api/articles/${id}`, {
      status: 200,
      headers: {
        "content-type": "application/json",
        Authorization: `Token ${token}`
      },
      body: data
    });
    const expectedActions = [{ type: UPDATE_ARTICLE, payload: data }];
    return store.dispatch(updateArticle(data, 2)).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
});

describe("update article action creators", () => {
  localStorage.setItem("token", "token");
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {
    articles: [],
    article: {}
  };
  const store = mockStore({ ...initialUserState });
  afterEach(() => {
    // eslint-disable-next-line no-undef
    fetchMock.restore();
  });

  it("should not update article", () => {
    const id = 2;
    const data = { article: {} };
    const token = "someToken";
    localStorage.setItem("token", token);
    // eslint-disable-next-line no-undef
    fetchMock.patch(`https://ah-backend-thor.herokuapp.com/api/articles/${id}`, {
      status: 400,
      headers: {
        "content-type": "application/json",
        Authorization: `Token ${token}`
      },
      body: data
    });
    const expectedActions = [{ type: UPDATE_FAIL, payload: data }];
    return store.dispatch(updateArticle(data, 2)).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
});
