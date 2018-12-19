import { mount, shallow } from "enzyme";
import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import {
  HomeHeaderSection,
  ArticleCard,
  ArticleDetails
} from "../../src/containers/viewArticles/articlesView";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ todos: [] });

describe("<Article/>", () => {
  it("it mounts the articles instance", () => {
    const wrapper = shallow(<ArticleCard />);
  });
});

describe("<HomeHeaderSection/>", () => {
  it("it mounts the articles instance", () => {
    const wrapper = shallow(<HomeHeaderSection />);
  });
});

describe("<ArticleDetails/>", () => {
  it("mounts the articles component", () => {
    const props = {
      articlesActions: () => jest.fn(),
      allArticles: {
        articles: {
          results: [{ author: "chucky", id: "1" }]
        }
      }
    };
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <ArticleDetails
            allArticles={props.allArticles}
            articlesActions={props.articlesActions}
          />
        </Router>
      </Provider>
    );
    expect(wrapper.find(".card-body").find("#component-btn").first().simulate('click'))
  });
});
