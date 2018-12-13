import "babel-polyfill";
import React from "react";
import { mount, shallow } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import PublishedArticles from "../../src/containers/Profile/PublishedArticles";

describe("<PostArticle />", () => {
  document
    .getElementsByTagName("head")[0]
    .appendChild(document.createElement("script"));
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {
    articleReducer: {
      articles: [{
        title: "",
        imageUrl: "",
        description: "",
        body: "",
        audioUrl: "",
        tags: []
      }],
    }
  };
  const store = mockStore({ ...initialUserState });
  const provider = shallow(<PublishedArticles store={store}  />);
  const PostArticleComponent = mount(<PublishedArticles store={store}  />);
  it("renders <Provider/> correctly on Edit", () => {
    expect(provider).toMatchSnapshot();
  });

});
