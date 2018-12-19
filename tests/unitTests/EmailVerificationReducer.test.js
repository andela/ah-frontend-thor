import { userVerifiedReducer } from "../../src/reducers/emailVerification";

describe("user verification reducer", () => {
  it("should return initial state", () => {
    expect(userVerifiedReducer(undefined, {})).toEqual({ message: "" });
  });

  it("receive successful verification message", () => {
    expect(
      userVerifiedReducer([], {
        type: "USER_VERIFIED",
        payload: "Verification is complete"
      })
    ).toEqual({ message: "Verification is complete" });
  });
});
