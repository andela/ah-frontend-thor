import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import listReducer from "../../src/reducers/bookmarksReducer";
import bookmarkslist from "../../src/actions/bookmarksAction";
import {
  mapDispatchToProps,
  mapStateToProps,
  clickHandler
} from "../../src/containers/bookmarks/Bookmarks";
import { BOOKMARKS } from "../../src/actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({ list: [] });
describe("bookmaks list", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('Non-existent bookmarks', () => {
    fetchMock.getOnce('https://ah-backend-thor.herokuapp.com/api/bookmarks/', {
      headers: { 'content-type': 'application/json' },
      body: []
    }, 500)

    const expectedActions = [
      { type: "BOOKMARKS_LIST",
      payload: []
     }
    ]
    return store.dispatch(bookmarkslist).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })


  it("fetching bookmarksfails", () => {
    fetch.mockReject(new Error("server error"));
    const store = mockStore();

    store.dispatch(bookmarkslist);
    expect(store.getActions()).toEqual([]);
  });

  it("test the click functionality to a single article", () => {
    const bookmark = { title: "now", description: "yet" };
    clickHandler(bookmark)({});
  });
});

describe("test mappings to Props", () => {
  it("should test mapStateToProps", () => {
    expect(mapStateToProps({ listReducer }).list).toEqual(undefined);
  });
  it("should test mapDispatchToProps", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).bookmarks;
    expect(dispatch.mock.calls.length).toBe(1);
  });
});
