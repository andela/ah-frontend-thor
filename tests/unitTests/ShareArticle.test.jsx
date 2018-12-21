import React from "react";
import { shallow, mount } from "enzyme";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ShareArticle } from "../../src/containers/shareArticle/ShareArticle";
import {
  DisplaySharedArticle,
  ArticleSection,
  mapStateToProps
} from "../../src/containers/shareArticle/DisplaySharedArticle";
import { ShareArticleFunction } from "../../src/actions/shareArticleAction";
import { displayAction } from "../../src/actions/displayAction";

import displaySharedArticleReducer from "../../src/reducers/displaySharedArticleReducer";
import shareArticleReducer from "../../src/reducers/shareArticleReducer";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ shareLink: {link: {}} });

it("test share article", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Router>
        <ShareArticle />
      </Router>
    </Provider>
  );
  const instance = wrapper.instance();
});

it("test share article functions", () => {
  const props = {
    sharewithFacebook: {
      link: {
        link:
          " https://www.facebook.com/sharer/sharer.php?u=https://ah-frontend-thor.herokuapp.com/display/testing"
      }
    }
  };
  const wrapper = shallow(
    <ShareArticle ShareArticleFunction={jest.fn()} {...props} />
  );
  const instance = wrapper.instance();
  instance.shareOnFacebook();
  instance.shareOnTwitter();
  instance.shareOnEmail();
});

it("Test display shared article component", () => {
  const match = { params: { slug: "test" } };
  const props = {
    displayResults: { display: { author: "esther" } },

    displayAction: jest.fn()
  };
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <DisplaySharedArticle {...props} match={match} />
      </Router>
    </Provider>
  );
});
it("ArticleSection", () => {
  const wrapper = shallow(<ArticleSection />);
});

it("Test Share article actions", () => {
  const slug = "test";
  const mediaType = "facebook";
  fetch.mockResponse(JSON.stringify({ access_token: "12345" }));
  store.dispatch(ShareArticleFunction(slug, mediaType));
});
it("Test Display article actions", () => {
  const slug = "test";
  fetch.mockResponse(JSON.stringify({ access_token: "12345" }));
  store.dispatch(displayAction(slug));
});

const displayArticleInitialState = {
  display: undefined
};

it("Test display shared action reducer", () => {
  const action = { type: "DISPLAY_ACTION" };
  expect(displaySharedArticleReducer(undefined, action)).toEqual(displayArticleInitialState);
});
const shareArticleInitialState = {
  link: undefined
};
it("Test shared Article reducer", () => {
  const action = { type: "SHARE_ARTICLE" };
  expect(shareArticleReducer(undefined, action)).toEqual(
    shareArticleInitialState
  );
});

it("Test mapStateToProps in Display shared article", () => {
  const match = { params: { slug: "test" } };
  const state = {

  };
  const props = {
    displayResults: { display: { } }
  };

  const wrapper = shallow(
    <DisplaySharedArticle displayAction={jest.fn()} state={state} {...props} match={match}/>
  );
  const expectedProp = {
    "displayResults": undefined
  };
  expect(mapStateToProps(state)).toEqual(expectedProp);
});
