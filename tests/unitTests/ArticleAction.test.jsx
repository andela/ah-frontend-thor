import expect from "expect";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import {
  createArticles,
  getAuthorArticles,
  getArticleById,
  updateArticle,
  deleteArticle
} from "../../src/actions/articleActions";

import {
  POST_ARTICLE,
  PROFILE_ARTICLES,
  GET_ARTICLE_BY_ID,
  UPDATE_FAIL,
  UPDATE_ARTICLE,
  DELETE_ARTICLE,
  DELETE_FAIL
} from "../../src/actions/types";

describe("Article action creators", () => {
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

  it("post article action", () => {
    const data = { article: {} };
    // eslint-disable-next-line no-undef
    fetchMock.post("https://ah-backend-thor.herokuapp.com/api/articles/", data);
    const expectedActions = [{ type: POST_ARTICLE, payload: data }];
    return store.dispatch(createArticles(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  
  
});

describe("Article action creators", () => {
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

describe("Article action creators", () => {
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
describe("Article action creators", () => {
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

  it("update article action", () => {
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

describe("Article action creators", () => {
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

  it("update fail action", () => {
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
describe("Article action creators", () => {
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

  it("Delete fail Action", () => {
    const id = 2;
    const data = { article: {} };
    const token = "someToken";
    localStorage.setItem("token", token);
    // eslint-disable-next-line no-undef
    fetchMock.deleteOnce(`https://ah-backend-thor.herokuapp.com/api/articles/${id}`, {
      status: 400,
      headers: {
        "content-type": "application/json",
        Authorization: `Token ${token}`
      },
      body:{}
    });
    const expectedActions = [{ type: DELETE_FAIL, payload: data }];
    return store.dispatch(deleteArticle(2)).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
  
});

describe("Article action creators", () => {
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

  it("Delete article action", () => {
    const id = 2;
    const data = { article: {} };
    const token = "someToken";
    localStorage.setItem("token", token);
    // eslint-disable-next-line no-undef
    fetchMock.deleteOnce(`https://ah-backend-thor.herokuapp.com/api/articles/${id}`, {
      status: 204,
      headers: {
        "content-type": "application/json",
        Authorization: `Token ${token}`
      },
      body:{}
    });
    const expectedActions = [{ type: DELETE_ARTICLE, payload: data }];
    return store.dispatch(deleteArticle(2)).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
  
});
