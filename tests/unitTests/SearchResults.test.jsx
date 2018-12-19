import React from "react";
import { shallow, mount } from "enzyme";
import searchReducer from "../../src/reducers/searchReducer";
import {
  SearchResults,
  onClickHandler
} from "../../src/containers/search/SearchResults";
import {
  SearchForm,
  inputStyleDisplay
} from "../../src/containers/search/SearchForm";
import { getSearchData } from "../../src/actions/getSearchDataAction";
import { saveImage } from "../../src/actions/profileAction";
import mockStore from "../mockStore";

fetch = require("jest-fetch-mock");

test("tests whether search reducer works", () => {
  const action = {
    type: "GET_SEARCH_DATA",
    payload: {}
  };
  expect(searchReducer(undefined, action));
});
test("tests whether searchresults Form works", () => {
  const action = {
    type: "GET_SEARCH_DATA",
    payload: {}
  };
  expect(searchReducer(undefined, action));
});

it("test the search results component", () => {
  const match = { params: { type: "author_name" } };
  const results = [
    {
      id: 2,
      tag_list: ["reactjs", "dragons", "angularjs"],
      slug: "how_do_i_write_better_code",
      title: "How do i write better code",
      description: "What does it take to become a better developer",
      body:
        "The twelve-factor app stores config in environment variables (often shortened to env vars or env). Env vars are easy to change between deploys without changing any code; unlike config files, there is little chance of them being checked into the code repo accidentally; and unlike custom config files, or other config mechanisms such as Java System Properties, they are a language- and OS-agnostic standard.",
      created_at: "2018-12-12T07:25:39.666736Z",
      updated_at: "2018-12-13T15:40:05.966046Z",
      favorited: false,
      favorites_count: 0,
      image_url:
        "https://cdn.pixabay.com/photo/2018/11/08/00/03/evolution-3801547_960_720.jpg",
      audio_url:
        "https://cdn.pixabay.com/photo/2018/11/08/00/03/evolution-3801547_960_720.jpg",
      read_time: "0 minute read",
      author: {
        id: 13,
        email: "charles.ssekito@andela.com",
        username: "chucky256"
      }
    }
  ];

  const params = "https://localhost:8080/searchresults/author_name/chucky256";
  const wrapper = shallow(
    <SearchResults
      getSearchData={jest.fn()}
      params={params}
      match={match}
      searchResults={results}
    />
  );
});

it("test the search results component", () => {
  const match = { params: { type: "author_name" } };
  const props = { searchResults: { length: undefined } };
  const params = "https://localhost:8080/searchresults/author_name/chucky256";
  const wrapper = shallow(
    <SearchResults
      getSearchData={jest.fn()}
      params={params}
      match={match}
      {...props}
    />
  );
});

it("test the search results component", () => {
  const match = { params: { type: "author_name" } };
  const results = [];

  const params = "https://localhost:8080/searchresults/author_name/chucky256";
  const wrapper = shallow(
    <SearchResults
      getSearchData={jest.fn()}
      params={params}
      match={match}
      searchResults={results}
    />
  );
});

it("test the onsubmit function in search form", () => {
  const state = {
    searchData: "",
    type: ""
  };
  const history = { push: jest.fn() };
  const wrapper = shallow(<SearchForm state={state} history={history} />);

  const instance = wrapper.instance();
  const Event = {};
  instance.onSubmit(Event);
});
it("test the onChange function in searchform", () => {
  const wrapper = shallow(<SearchForm />);

  wrapper.find("#searchData").simulate("change", {
    target: { value: "searchData", name: "searchData" }
  });
  expect(wrapper.state("searchData")).toBe("searchData");
});

it("test the myFunction function in search form", () => {
  const state = {
    type: "title"
  };
  const history = { push: jest.fn() };
  const searchData = "searchData";
  const wrapper = mount(
    <SearchForm state={state} history={history} searchData={searchData} />
  );

  const instance = wrapper.instance();

  const e = { target: { name: "xx", value: "xx" }, preventDefault: jest.fn() };

  instance.setFormState(e);
});

test("test getSearchData in search Form", () => {
  fetch.mockResponse(JSON.stringify({ access_token: "12345" }));
  const store = mockStore({});
  store.dispatch(getSearchData());
});
test("test getSearchData in search Form", () => {
  fetch.mockResponse(JSON.stringify({ access_token: "12345" }));
  const store = mockStore({});
  store.dispatch(saveImage());
});

it("Test selecting a sigle component", () => {
  console.log(onClickHandler(2, "kegs")({}));
  onClickHandler(2, "kegs")({});
});

it("Test toggling search input box", () => {
  const type = "title";
  expect(inputStyleDisplay(type)).toBe("displayBlock");
});
