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
  TagSection,
  mapStateToProps,
  mapDispatchToProps
} from "../../src/containers/viewArticles/articleView";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ shareLink: {link: {}} });

describe("<ArticleSection/>", () => {
  it("it mounts the articles instance", () => {
        const tags = ["code", "web"]
    const wrapper = mount(<ArticleSection  tags= {tags}/>);
  });
});

describe("<SingleArticle/>", () => {
  it("mounts the articles component", () => {
    const tags = ["code", "web"]
    const props = {
      singleArticleAction: () => jest.fn(),
      Article: {
        article: {
          body: "this a test article",
          description: "Ever wonder how",
          id: 20
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
    ).setState({tags:[]});
    wrapper.setProps(tags)
  });
});

describe("Checks whether mapstate to props returns", () => {
  const expectedProp = {
    singleArticleReducer: {
      article: [{ id: 5, user: "chucky", body: "user already registered" }]
    }
  };

  expect(mapStateToProps(expectedProp)).toBeTruthy();
});

describe("Checks whether mapdispatch to props returns", () => {
  const dispatch = jest.fn();
  mapDispatchToProps(dispatch).singleArticleAction();
  expect(dispatch.mock.calls.length).toBe(1);
});

describe("<TagSection/>", () => {
  it("it mounts the tags selection to test", () => {
    const tags = ["code", "web"];
    const wrapper = mount(<TagSection tags={tags} />);
  });
});
