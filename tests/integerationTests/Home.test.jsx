import "babel-polyfill";
import React from "react";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

// eslint-disable-next-line import/no-unresolved
import Content from "../../src/components/Contents";
// eslint-disable-next-line import/no-unresolved
import SocialButtons from "../../src/components/login/SocialButtons";
import Home from "../../src/components/Home";

describe("<Content />", () => {
  document
    .getElementsByTagName("head")[0]
    .appendChild(document.createElement("script"));
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialUserState = {
    social: {
      isLoggedIn: false,
      user: null,
      token: null
    }
  };

  const store = mockStore({ ...initialUserState });
  const provider = shallow(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  const home = shallow(<Content />);
  const social = shallow(<SocialButtons />);

  it("renders <Provider/> correctly", () => {
    expect(provider).toMatchSnapshot();
  });
  it("renders <Provider/> correctly", () => {
    expect(social).toMatchSnapshot();
  });

  it("renders <Home/> correctly", () => {
    expect(home).toMatchSnapshot();
  });
  describe("<Content />", () => {
    it("should render without crashing", () => {
      expect(mount.bind(null, <Provider store={store}><Content /></Provider>)).not.toThrow();
    });
  });

  it("should render container class", () => {
    const editor = shallow(<Content />);
    expect(editor.find("div.container").length).toEqual(1);
  });
  it("should render <Facebook/>", () => {
    expect(shallow(<SocialButtons />).find("Connect(Facebook)")).toHaveLength(1);
  });
  it("should render <Google/>", () => {
    expect(shallow(<SocialButtons />).find("Connect(Google)")).toHaveLength(1);
  });
  it("tests the footer of the app against the snapshot", () => {
    const component = shallow(<Provider store={store}><Home/></Provider>);
    expect(component).toMatchSnapshot();

  });
});
