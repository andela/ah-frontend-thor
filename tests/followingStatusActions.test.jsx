/* eslint-disable import/no-extraneous-dependencies */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
// import login, {alert, errorAlert} from "../src/actions/loginActions";
import followStatus, { followStatusUrl } from "../src/actions/followingStatusAction";
import * as store_ from "../src/store";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

fetchMock.config.fallbackToNetwork = true;

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
    fetchMock.get(followStatusUrl("cdvx"), dataObject, 200);
    const store = mockStore({ item: {} });
    store.dispatch(followStatus({
      type:"FOLLOW_STATUS",
      payload: dataObject}));
    expect(store.getActions()).toEqual([]);
    store.dispatch(followStatus({errors: "error message"}));
    expect(store.getActions()).toEqual([]);

  });

  it("follows user with follow action", () => {
    fetch.mockReject(followStatusUrl("cdvx"), new Error("fake error message"));
    const store = mockStore({ errors: {} });
    store.dispatch(followStatus("cdvx"));
    expect(store.getActions()).toEqual([]);
    store.dispatch(followStatus({errors: "error message"}));
    expect(store.getActions()).toEqual([]);


  });
  it("follows user with follow action2", () => {
    fetchMock.get(followStatusUrl("cdvx"), dataObject, 200)/*.catch(url => fetchMock.get(url))*/;
    const store = mockStore({ item: {} });
    store.dispatch(followStatus("cdvx"));
    expect(store.getActions()).toEqual([]);
    store.dispatch(followStatus({errors: "error message"}));
    expect(store.getActions()).toEqual([]);

  });


});


// describe("test alert", ()=>{
//   it ("tests alert success", () => {
//     alert("success",null,"cedric","random token");
//   });
//   it("test alert error", ()=>{
//     alert("error","this is an error message", null, null);
//     errorAlert("error", "this is an error message");
//   });
// });

describe("test", ()=>{
  it ("tests the store", () => {
    expect(store_).toBeTruthy();
  });
});

// describe("test set timeouts", ()=>{
//   jest.useFakeTimers();

//   it("waits 3 seconds before rerouting", () => {
//     alert("success", null, "user", "password", "/");

//     expect(setTimeout).toHaveBeenCalled();
//     expect(setTimeout).toHaveBeenLastCalledWith(expect.anything(), 5000);
//   });
// });
