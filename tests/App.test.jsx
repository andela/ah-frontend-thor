import "babel-polyfill";

import { mount, shallow } from "enzyme";

import React from "react";
import AppRouter from "../src/components/AppRouter";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Login from "../src/containers/Login";
import Root from "../src/components/Root";
import store from "../src/store";

describe("<Login />", () => {
  it("should render without crashing", () => {
    expect(mount.bind(null, <Login store={store} />)).not.toThrow();
  });
});

jest.mock("../src/containers/Login", () => () => "Login");

describe("<AppRouter />", () => {
  it("should render without crashing", () => {
    expect(mount.bind(null, <AppRouter />)).not.toThrow();
  });
});


describe("<Header />", () => {
  it("should render NavLink", () => {
    const editor = shallow(<Header />);
    expect(editor.find("div.navbar-nav").length).toEqual(1);
  });
});


describe("<Home />", () => {
  it("should render without crashing", () => {
    expect(mount.bind(null, <Home />)).not.toThrow();
  });
});

describe("<Root />", () => {
  it("should render jumbotron", () => {
    const editor = shallow(<Root />);
    expect(editor.find("div").length).toEqual(1);
  });
});
