import "babel-polyfill";
import React from "react";
import { mount, shallow } from "enzyme";
import puppeteer from "puppeteer";

// import App from "../src/components/App";
import AppRouter from "../src/components/AppRouter";

// import Login from "../src/Components/Login/Login";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Root from "../src/components/Root";


// describe("<Login />", () => {
//   it("should render without crashing", () => {
//     expect(mount.bind(null, <Login />)).not.toThrow();
//   });

  it("print user agent", async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("http://google.com");

    await page.screenshot({ path: "filename.png", fullPage: true });
    browser.close();
  }, 16000);


// jest.mock('../Components/Login/', () => () => 'Login');

describe("<AppRouter />", () => {
  it("should render without crashing", () => {
    expect(mount.bind(null, <AppRouter />)).not.toThrow();
  });
});

// describe("<Login />", () => {
//   it("should render section", () => {
// 		const editor = shallow(<Login />);
//     expect(editor.find("section.mt-4").length).toEqual(1);
//   });
// });

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
