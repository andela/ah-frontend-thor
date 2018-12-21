/* eslint-disable react/jsx-no-undef */
import { mount, shallow } from "enzyme";

import React from "react";
import expect from "expect";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import FollowStatus, {mapStateToProps, mapDispatchToProps} from "../src/components/FollowStatus";



const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  followingStatusReducer:{results: []},
  followStatusReducer: {results: []},
  followUser: jest.fn(),
  getFollowStatus: jest.fn(),
  unfollowUser: jest.fn(),
});

it("it should render component", () => {
  shallow(
    <MemoryRouter>
      <Provider store={store}><FollowStatus /></Provider>
    </MemoryRouter>,
  );
});

describe("<FollowStatus />", () => {
  test("renders the component", () => {
    const wrapper = mount(<Provider store={store}><FollowStatus /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Login", () => {
  it("should show previously previously passed state", () => {
    const state = {
      followStatusReducer: {results: []},
      followingStatusReducer:{results: []}
    };
    expect(mapStateToProps(state)).toEqual(state);

  });

  it("Should pass action to props on submit", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getfollowedStatus("cdvx");
    expect((dispatch.mock.calls[0][0])).toBeTruthy();
    mapDispatchToProps(dispatch).getFollowStatus("cdvx");
  });
});
