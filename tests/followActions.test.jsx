/* eslint-disable import/no-extraneous-dependencies */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
// import login, {alert, errorAlert} from "../src/actions/loginActions";
import follow, { followUrl } from "../src/actions/followActions";
import * as store_ from "../src/store";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);


const dataObject = {
  data: {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`
    }
  },
  following_user: "cdvx",
  followed_user: "cdvx"
};

describe(" follow actions ", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("follows user with follow action", () => {
    fetchMock.post(followUrl, dataObject.data, 200);
    const store = mockStore({ item: {} });
    store.dispatch(follow({
      type:"FOLLOW_USER",
      payload: dataObject.data}));
    expect(store.getActions()).toEqual([]);
    store.dispatch(follow({errors: "error message"}));
    expect(store.getActions()).toEqual([]);

  });

  it("follows user with follow action", () => {
    fetch.mockReject(new Error("fake error message"));
    const store = mockStore({ errors: {} });
    store.dispatch(follow(dataObject.data));
    expect(store.getActions()).toEqual([]);
    store.dispatch(follow({errors: "error message"}));
    expect(store.getActions()).toEqual([]);


  });
  it("follows user with follow action", () => {
    fetchMock.post(followUrl, {errors: "this error!"}, 200);
    const store = mockStore({ item: {} });
    store.dispatch(follow({errors: "this error!"}));
    expect(store.getActions()).toEqual([]);
    store.dispatch(follow({errors: "error message"}));
    expect(store.getActions()).toEqual([]);

  });


});

describe("test", ()=>{
  it ("tests the store", () => {
    expect(store_).toBeTruthy();
  });
});
