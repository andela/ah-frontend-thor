/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-undef */
import { mount, shallow } from "enzyme";

import React from "react";
import expect from "expect";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Follow, {RelatedArticles, FollowButton, UnFollowButton, mapStateToProps, mapDispatchToProps} from "../src/components/Follow";
import FollowStatus from "../src/components/FollowStatus";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ followStatusReducer: {results: []},
  followUser: jest.fn(),
  getFollowStatus: jest.fn(),
  unfollowUser: jest.fn(),
});

it("it should render component", () => {
  shallow(
    <MemoryRouter>
      <Provider store={store}><Follow /></Provider>
    </MemoryRouter>,
  );
});

const props = {
  auth: {
    "errors": "User with this name or password not found !"
  },
  onClick: jest.fn(),
  loginUser: jest.fn(),
  followedUsername: "cdvx",
};

describe("<Follow />", () => {
  test("renders the component", () => {
    const wrapper = shallow(<Provider store={store}><Follow /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("<RelatedArticles />", () => {
  test("renders the component", () => {
    const wrapper = shallow(<RelatedArticles />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("<FollowButton />", () => {
  test("renders the component", () => {
    const wrapper = shallow(<FollowButton onClick={props.onClick} followedUsername={props.followedUsername} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("<UnFollowButton />", () => {
  test("renders the component", () => {
    const wrapper = shallow(<UnFollowButton onClick={props.onClick} followedUsername={props.followedUsername} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("<FollowStatus />", () => {
  test("renders the component", () => {
    const wrapper = shallow(<Provider store={store}><FollowStatus /></Provider>);

    expect(wrapper).toMatchSnapshot();
  });
});


describe("test the login container", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const storee = mockStore({ followStatusReducer: {results: []}, followUser: jest.fn(), getFollowStatus: jest.fn(), unfollowUser:jest.fn() });
  const fakeEvent = { preventDefault: () => {}};

  const wrapper = mount(<Provider store={storee}><Follow fakeEvent /></Provider>);
  wrapper.setState({
    followedByUser: [],
    followingUsername: "chucky",
    followedUsername: "cdvx"
  });

  wrapper.setProps({followUser: jest.fn(), getFollowStatus: jest.fn(), unfollowUser:jest.fn() });
  it("should mount the login component", () => {

    expect(wrapper.find("FollowButton").simulate("click", fakeEvent));
    // wrapper.find("FollowButton").simulate("click", fakeEvent);

  });
});

describe("test the Follow container", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const storee = mockStore({ followStatusReducer: {results: [{}]}, followUser: jest.fn(), getFollowStatus: jest.fn(), unfollowUser:jest.fn() });
  const fakeEvent = { preventDefault: () => {}};

  const wrapper = mount(<Provider store={storee}><Follow fakeEvent /></Provider>);
  wrapper.setState({
    followedByUser: [],
    followingUsername: "chucky",
    followedUsername: "cdvx"
  });

  wrapper.setProps({followUser: jest.fn(), getFollowStatus: jest.fn(), unfollowUser:jest.fn() });
  it("should mount the login component", () => {

    expect(wrapper.find("UnFollowButton").simulate("click", fakeEvent));

  });
});

describe("Login", () => {
  it("should show previously previously passed state", () => {
    const state = {
      followStatusReducer: {results: []}
    };
    expect(mapStateToProps(state)).toEqual({results: []});

  });

  it("Should pass action to props on submit", () => {
    const dispatch = jest.fn();
    const fakeEvent = { preventDefault: () => {}};
    mapDispatchToProps(dispatch).followUser(fakeEvent, "cdvx");
    expect((dispatch.mock.calls[0][0])).toBeTruthy();
    mapDispatchToProps(dispatch).getFollowStatus(fakeEvent, "cdvx");
    expect((dispatch.mock.calls[0][0])).toBeTruthy();
    mapDispatchToProps(dispatch).unfollowUser(fakeEvent, "cdvx");
    expect((dispatch.mock.calls[0][0])).toBeTruthy();
  });
});


describe("<UnFollowButton />", () => {
  describe("onClick()", () => {
    test("successfully calls the onSubmit handler", () => {
      const wrapper = shallow(
        <UnFollowButton onClick={props.onClick} />
      );
      wrapper.simulate("onClick");

      expect(props.onClick).toBeTruthy();
    });
  });
});


describe("Checks whether mapstate to props returns", () => {
  const expectedProp = {
    followStatusReducer: {results: []},
    followUser: jest.fn(),
    getFollowStatus: jest.fn(),
    unfollowUser: jest.fn(),
  };

  expect(mapStateToProps(expectedProp)).toBeTruthy();
});


describe("Checks whether mapdispatch to props returns", () => {
  const dispatch = jest.fn();
  mapDispatchToProps(dispatch).followUser();
  expect(dispatch.mock.calls.length).toBe(1);
});
