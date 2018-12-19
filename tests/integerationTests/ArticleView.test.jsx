import { mount, shallow } from "enzyme";
import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import {
  SocialMediaSection,
  ArticleSection,
  SingleArticle,
  mapStateToProps,
  mapDispatchToProps
} from "../../src/containers/viewArticles/articleView";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ todos: [] });

describe("<SocialMediaSection/>", () => {
  it("it mounts the articles instance", () => {
    const wrapper = shallow(<SocialMediaSection />);
  });
});

describe("<ArticleSection/>", () => {
  it("it mounts the articles instance", () => {
    const wrapper = shallow(<ArticleSection />);
  });
});

describe("<SingleArticle/>", () => {
  it("mounts the articles component", () => {
    const props = {
      singleArticleAction: () => jest.fn(),
      Article: {
        article: {
          body: "this a test article", description:"Ever wonder how", id: 20
        }
      }
    };
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <SingleArticle
            Article={props.Article}
            singleArticleAction={props.singleArticleAction}
          />
        </Router>
      </Provider>
    );
  });
});


describe("Checks whether mapstate to props returns", () => {
  const expectedProp = {
    singleArticleReducer: {
      article: [{ id:5,user:"chucky",body:"user already registered" }],
    }
  };

  expect(mapStateToProps(expectedProp)).toBeTruthy();
});


describe("Checks whether mapdispatch to props returns", () => {
  const dispatch = jest.fn()
  mapDispatchToProps(dispatch).singleArticleAction();
  expect(dispatch.mock.calls.length).toBe(1);
});
