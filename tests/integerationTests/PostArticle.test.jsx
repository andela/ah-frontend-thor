import "babel-polyfill";
import React from "react";
import { mount, shallow } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import PostArticle from "../../src/components/article/PostArticle";
describe("<PostArticle />", () => {
  document
    .getElementsByTagName("head")[0]
    .appendChild(document.createElement("script"));
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {
    article: {
      title: "",
      imageUrl: "",
      description: "",
      body: "",
      audioUrl: "",
      tags: []
    }
  };
  const preventDefault = jest.fn();
  const store = mockStore({ ...initialUserState });
  const provider = shallow(<PostArticle store={store} />);
  const PostArticleComponent = mount(<PostArticle store={store} />);
  it("renders <Provider/> correctly", () => {
    expect(provider).toMatchSnapshot();
  });
  const formWrapper = provider.dive().find("main");

  it("should render main", () => {
    expect(formWrapper.find("main.mt-5").length).toEqual(1);
  });

  test("test function ", async () => {
    global.cloudinary = {
      openUploadWidget: (params, cb) => {
        cb(null, {
          event: "success",
          info: { secure_url: "http://cloudinary/img/123.png" }
        });
      }
    };
    const widgetFn = provider
      .dive()
      .instance()
      .handleOnClick();
    expect(widgetFn);
  });
  it("should render a form that handles submits", () => {
    expect(
      PostArticleComponent.find("form").simulate("submit", { preventDefault })
    );
    expect(preventDefault).toBeCalled();
  });

  it("should render a form that handles input changes", () => {
    expect(
      PostArticleComponent.find('[name="title"]').simulate("change", {
        target: { name: "title", value: "dogs" }
      })
    );
  });
  it("should chnage the state of tags", () => {
    const mock = jest.fn();
    PostArticleComponent.instance().onTagsChange = mock;
    PostArticleComponent.find("TagsInput").prop("onChange")([]);
    expect(PostArticleComponent.find("TagsInput").props().value).toEqual([]);
  });
});
