import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import {
  UpdateUserInfo,
  mapDispatchToProps
} from "../../src/containers/EmailVerification";

import userVerified from "../../src/actions/userVerification";

describe("User verification", () => {
  const token = 3;
  test("tests if the component is mounted", () => {
    const store = mockStore(1);
    const wrapper = shallow(
      <UpdateUserInfo store={store} updateUser={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("test fetch with an empty variable", () => {
    fetch.mockResponse(JSON.stringify({ access_token: "12345" }));
    const store = mockStore({ message: "" });

    store.dispatch(userVerified(token)).then(()=>{
      expect(store.getActions()).toEqual([
        { type: "USER_VERIFIED", payload: value }
      ]);
    });
  });
  it("verification fails due to system error", () => {
    fetch.mockReject(new Error("server error"));
    const store = mockStore();


    store.dispatch(userVerified(token));
    expect(store.getActions()).toEqual([]);
  });
  it("should mount component on redirect", () => {
    let dispatch = jest.fn();
    mapDispatchToProps(dispatch).updateUser();
    expect(dispatch.mock.calls.length).toBe(1);
  });
});
