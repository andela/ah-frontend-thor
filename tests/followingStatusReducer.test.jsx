/* eslint-disable no-unused-expressions */
import followingStatusChecker from "../src/reducers/followingStatusReducer";


const initialState =  {"data": [], "errors": "", "results": []};

describe(" INITIAL_STATE ", () => {
  test("is an empty object", () => {
    const action = {type:"NOTEXISTING"};
    expect(followingStatusChecker(undefined,action)).toEqual(initialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const token = "fjfcfjhkee";
    const action = {type:"FOLLOWING_STATUS", payload: token};
    expect(followingStatusChecker(undefined,action)) !== (initialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const errors = "fjfcfjhkee";
    const action = {type:"FOLLOWING_STATUS_ERROR", payload: errors};
    expect(followingStatusChecker(undefined,action)) !== (initialState);
  });
});
