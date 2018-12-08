/* eslint-disable import/no-extraneous-dependencies */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import expect from "expect";
// import login, {alert, errorAlert} from "../src/actions/loginActions";
import unFollow, { unfollowUrl } from "../src/actions/unfollowActions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

fetchMock.config.fallbackToNetwork = true;

// const loginUrl = "https://ah-backend-thor.herokuapp.com/api/users/login/";

const dataObject = {
  method: "DELETE",
  headers: {
    "content-type": "application/json",
    Authorization: `Token ${localStorage.getItem("token")}`
  },
  user: "cdvx2"
};

describe(" follow status actions ", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("user can get follow status with follow status action", () => {
    fetchMock.delete(unfollowUrl("cdvx"), dataObject, 200);
    const store = mockStore({ item: {} });
    store.dispatch(unFollow({
      type:"UNFOLLOW",
      payload: dataObject}));
    expect(store.getActions()).toEqual([]);
    store.dispatch(unFollow({errors: "error message"}));
    expect(store.getActions()).toEqual([]);

  });

  it("follows user with follow action", () => {
    fetch.mockReject(unfollowUrl("cdvx"), new Error("fake error message"));
    const store = mockStore({ errors: {} });
    store.dispatch(unFollow("cdvx"));
    expect(store.getActions()).toEqual([]);
    store.dispatch(unFollow({errors: "error message"}));
    expect(store.getActions()).toEqual([]);

  });
  it("follows user with follow action2", () => {
    fetchMock.delete(unfollowUrl("cdvx"), dataObject, 200);
    const store = mockStore({ item: {} });
    store.dispatch(unFollow("cdvx"));
    expect(store.getActions()).toEqual([]);
    store.dispatch(unFollow({errors: "error message"}));
    expect(store.getActions()).toEqual([]);

  });


});
