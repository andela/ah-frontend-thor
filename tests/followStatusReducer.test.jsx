/* eslint-disable no-unused-expressions */
import followStatusChecker from "../src/reducers/followStatusReducer";


const initialState =  {"errors": "", "results": []}

describe(" INITIAL_STATE ", () => {
  test("is an empty object", () => {
    const action = {type:"NOTEXISTING"};
    expect(followStatusChecker(undefined,action)).toEqual(initialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const token = "fjfcfjhkee";
    const action = {type:"FOLLOW_STATUS", payload: token};
    expect(followStatusChecker(undefined,action)) !== (initialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const errors = "fjfcfjhkee";
    const action = {type:"FOLLOW_STATUS_ERROR", payload: errors};
    expect(followStatusChecker(undefined,action)) !== (initialState);
  });
});
