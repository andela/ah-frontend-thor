/* eslint-disable no-unused-expressions */
import followCheker from "../src/reducers/followReducer";


const initialState = {"data": null, "errors": "", "followedByUser": []}

describe(" INITIAL_STATE ", () => {
  test("is an empty object", () => {
    const action = {type:"NOTEXISTING"};
    expect(followCheker(undefined,action)).toEqual(initialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const token = "fjfcfjhkee";
    const action = {type:"FOLLOW_USER", payload: token};
    expect(followCheker(undefined,action)) !== (initialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const errors = "fjfcfjhkee";
    const action = {type:"FOLLOW_ERROR", payload: errors};
    expect(followCheker(undefined,action)) !== (initialState);
  });
});
