import "babel-polyfill";
import React from "react";
import { mount, shallow } from "enzyme";
import AppRouter from "../../src/components/AppRouter";
import Header from "../../src/components/Header";
import Root from "../../src/components/Root";

describe("<AppRouter />", () => {
  // simulate an empty script in the head where the FacebookLoginButton tries to inject scrtipts
  document
    .getElementsByTagName("head")[0]
    .appendChild(document.createElement("script"));

  it("should render without crashing", () => {
    expect(mount.bind(null, <AppRouter />)).not.toThrow();
  });
  it("tests the footer of the app against the snapshot", () => {
    const component = shallow(<AppRouter />);
    expect(component).toMatchSnapshot();
});


describe("<Header />", () => {
  it("should render NavLink", () => {
    const editor = shallow(<Header />);
    expect(editor.find("nav.navbar").length).toEqual(1);
  });
});

describe("<Root />", () => {
  it("should render jumbotron", () => {
    const editor = shallow(<Root />);
    expect(editor.find("div.container").length).toEqual(1);
  });
});
});
