"use strict";
import React from "react";
import { shallow } from "enzyme";

import { Profile, mapStateToProp } from "../src/containers/Profile/Profile";
import {
  EditProfile,
  mapStateToProps
} from "../src/containers/Profile/EditProfile";
import profileReducer from "../src/reducers/profileReducer";
import {
  fetchProfile,
  editProfile,
  saveImage,
  fetchProfileSuccess
} from "../src/actions/profileAction";
import mockStore from "./mockStore";
import { FETCH_PROFILE_REQUEST, EDIT_PROFILE } from "../src/actions/types";
import fetchMock from "fetch-mock";

fetch = require("jest-fetch-mock");

require("babel-polyfill");

const username2 = localStorage.getItem("username2");

describe("<Profile />", () => {
  it('should render correctly in "debug" mode Profile component', () => {
    const component = shallow(
      <Profile fetchProfile={jest.fn()} profile={""} />
    );
    expect(component).toMatchSnapshot();
  });
  it("test the editButton function in profile", () => {
    const wrapper = shallow(<Profile fetchProfile={jest.fn()} profile={""} />);
    const instance = wrapper.instance();
    instance.editButton();
  });

  it("test the image funtion in profile", () => {
    const wrapper = shallow(<Profile fetchProfile={jest.fn()} profile={""} />);
    wrapper.setProps({ profile: { user: { image: "" } } });
    const instance = wrapper.instance();
    instance.image();
  });

  it("test the localStorage funtion in profile", () => {
    const wrapper = shallow(<Profile fetchProfile={jest.fn()} profile={""} />);
    wrapper.setProps({ profile: { user: { image: "" } } });
    const instance = wrapper.instance();
    instance.localStorageFunction();
  });
});
it("test the onsubmit function in editProfile", () => {
  const props = {
    image: "http:image.jpg"
  };
  const wrapper = shallow(
    <EditProfile editProfile={jest.fn} image={""} {...props} />
  );
  wrapper.setState({ image: "" });
  const instance = wrapper.instance();
  const Event = {
    preventDefault: () => {
      name;
    }
  };
  instance.onSubmit(Event);
});

it("test the onsubmit function in editProfile", () => {
  const wrapper = shallow(<EditProfile editProfile={jest.fn} image={""} />);
  wrapper.setState({ image: "" });
  const instance = wrapper.instance();
  const Event = {
    preventDefault: () => {
      name;
    }
  };
  instance.onSubmit(Event);
});
it("test the onChange function in editprofile", () => {
  const wrapper = shallow(<EditProfile editProfile={jest.fn} image={""} />);
  wrapper
    .find("#bio")
    .simulate("change", { target: { value: "bio", name: "bio" } });
  expect(wrapper.state("bio")).toBe("bio");
});
it("test the uploadImage function in editprofile component", () => {
  const saveImage = jest.fn();
  const wrapper = shallow(
    <EditProfile editProfile={jest.fn} saveImage={saveImage} />
  );

  wrapper.find("#file-upload").simulate("change", {
    target: { value: "http://image", files: 0 }
  });
});

describe("<EditProfile />", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<EditProfile />);
    expect(component).toMatchSnapshot();
  });
  it("test editDataHeading in edit profile", () => {
    const wrapper = shallow(<EditProfile editProfile={jest.fn()} />);

    const instance = wrapper.instance();
    instance.editDataHeading();
  });
});

const initialState = {
  user: {},
  item: {},
  image: ""
};
const store = mockStore({ ...initialState });
describe("Testing wrong action", () => {
  test("when wrong action is passed", () => {
    const action = { type: "DONT_FETCH" };
    expect(profileReducer(undefined, action)).toEqual(initialState);
  });
});

describe(" PROFILE REDUCER TESTIING FETCH_PROFILE_SUCCESS ", () => {
  test("tests whether get profile reducer works", () => {
    const action = {
      type: "FETCH_PROFILE_SUCCESS",
      payload: {
        profile_user: "kalyango",
        bio: "jijijeijeee",
        image:
          "https://res.cloudinary.com/dksxmwjqs/image/upload/v1544192758/hqqg0sil5sifcvigi5lx.jpg",
        following: false,
        updated_at: "2018-12-07T14:26:02.103915Z"
      }
    };
    expect(profileReducer(undefined, action)) !== initialState;
  });
});

describe(" PROFILE REDUCER TESTIING EDIT_PROFILE ", () => {
  test("tests edit profile", () => {
    const action = {
      type: "EDIT_PROFILE",
      payload: {
        profile_user: "kalyango",
        bio: "jijijeijeee",
        image:
          "https://res.cloudinary.com/dksxmwjqs/image/upload/v1544192758/hqqg0sil5sifcvigi5lx.jpg",
        following: false,
        updated_at: "2018-12-07T14:26:02.103915Z"
      }
    };
    expect(profileReducer(undefined, action)) !== initialState;
  });
});

describe(" PROFILE REDUCER TESTING SAVE_IMAGE ", () => {
  test("tests save image", () => {
    const action = {
      type: "SAVE_IMAGE",
      payload: {
        profile_user: "kalyango",
        bio: "jijijeijeee",
        image:
          "https://res.cloudinary.com/dksxmwjqs/image/upload/v1544192758/hqqg0sil5sifcvigi5lx.jpg",
        following: false,
        updated_at: "2018-12-07T14:26:02.103915Z"
      }
    };
    expect(profileReducer(undefined, action)) !== initialState;
  });
});

describe(" test Actions FETCH_PROFILE_SUCCESS fetcProfile message ", () => {
  test("test fetch profile", () => {
    const accessToken = "tokentokensecret";
    fetch.mockResponse(JSON.stringify({ access_token: "12345" }));
    store.dispatch(fetchProfile());
    expect(store.getActions()).toEqual([{ type: "FETCH_PROFILE_REQUEST" }]);
  });
  it("test fetchprofileSuccess", () => {
    fetchMock.get(
      `https://ah-backend-thor.herokuapp.com/api/profiles/${username2}`,
      200
    );
    const accessToken = "tokentokensecret";
    store.dispatch(fetchProfileSuccess("user"));
    expect(
      store.getActions(
        `https://ah-backend-thor.herokuapp.com/api/profiles/${username2}`,
        {
          accessToken
        }
      )
    ).toEqual([
      { type: "FETCH_PROFILE_REQUEST" },
      { payload: "user", type: "FETCH_PROFILE_SUCCESS" }
    ]);
  });
});

const REGISTER_URL = "https://ah-backend-thor.herokuapp.com/api/user/";

const data1 = {
  user: {
    bio: "yooo",

    image: "http//image.jpg"
  }
};

describe(" test EDIT PROFILE ", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("tests edit profile", () => {
    fetchMock.put(REGISTER_URL, data1);
    const store = mockStore({ item: {} });
    const expectedActions = [{ type: EDIT_PROFILE, payload: data1 }];

    return store
      .dispatch(editProfile(data1))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});

describe(" test Actions SAVE_IMAGE ", () => {
  test("test save image", () => {
    const formData = new FormData();
    const imageId = "ijsios";
    fetch.mockResponse(JSON.stringify({ access_token: "12345" }));
    const expectedActions = [
      { type: "FETCH_PROFILE_REQUEST" },
      { payload: "user", type: "FETCH_PROFILE_SUCCESS" }
    ];
    store.dispatch(saveImage(formData, imageId));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

it("maps the state to the props in edit profile", () => {
  const state = {
    username: "kalyango",
    bio: "AM at Andela",
    profile: { image: "gdgh" }
  };
  const props = {
    profile: { user: { image: "" } }
  };

  const wrapper = shallow(
    <EditProfile editProfile={jest.fn()} state={state} {...props} />
  );
  const expectedProp = {
    image: "gdgh"
  };
  expect(mapStateToProps(state)).toEqual(expectedProp);
});

it("maps the state to the props in profile", () => {
  const state = {
    username: "kalyango",
    bio: "AM at Andela",
    profile: {}
  };
  const props = {
    profile: {}
  };

  const wrapper = shallow(
    <Profile fetchProfile={jest.fn()} state={state} {...props} />
  );
  const expectedProp = {
    profile: {}
  };
  expect(mapStateToProp(state)).toEqual(expectedProp);
});
