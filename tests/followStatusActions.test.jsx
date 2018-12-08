/* eslint-disable import/no-extraneous-dependencies */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
// import login, {alert, errorAlert} from "../src/actions/loginActions";
import followingStatus, { followingStatusUrl } from "../src/actions/followStatusActions";
import * as store_ from "../src/store";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

fetchMock.config.fallbackToNetwork = true;

// const loginUrl = "https://ah-backend-thor.herokuapp.com/api/users/login/";

const dataObject = {
  method: "GET",
  headers: {
    "content-type": "application/json",
    Authorization: `Token ${localStorage.getItem("token")}`
  },
  results: []
};

describe(" follow status actions ", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("user can get follow status with follow status action", () => {
    fetchMock.get(followingStatusUrl("cdvx"), dataObject, 200)/*.catch(url => fetchMock.get(url))*/;
    const store = mockStore({ item: {} });
    store.dispatch(followingStatus({
      type:"FOLLOW_STATUS",
      payload: dataObject}));
    expect(store.getActions()).toEqual([]);
    store.dispatch(followingStatus({errors: "error message"}));
    expect(store.getActions()).toEqual([]);

  });

  it("follows user with follow action", () => {
    fetch.mockReject(followingStatusUrl("cdvx"), new Error("fake error message"));
    const store = mockStore({ errors: {} });
    store.dispatch(followingStatus("cdvx"));
    expect(store.getActions()).toEqual([]);
    store.dispatch(followingStatus({errors: "error message"}));
    expect(store.getActions()).toEqual([]);

    // expect(alert("error","this is an error message", null, null, "/")).toEqual(undefined);

  });
  it("follows user with follow action2", () => {
    fetchMock.get(followingStatusUrl("cdvx"), dataObject, 200)/*.catch(url => fetchMock.get(url))*/;
    const store = mockStore({ item: {} });
    store.dispatch(followingStatus("cdvx"));
    expect(store.getActions()).toEqual([]);
    store.dispatch(followingStatus({errors: "error message"}));
    expect(store.getActions()).toEqual([]);

  });


});

