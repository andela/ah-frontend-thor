import social from "../../src/reducers/socialReducer";
import { SOCIAL_LOGIN } from "../../src/actions/types";

describe("socialLoginReducer", () => {
  it("has a default state", () => {
    expect(social(undefined, { type: "unexpected" })).toEqual({
      isLoggedIn: false,
      user: null,
      token: null
    });
  });

  it("updates state on SOCIAL_LOGIN with GOOGLE action type", () => {
    expect(
      social(undefined, {
        type: SOCIAL_LOGIN,
        payload: { token: "token", user:{username:"joshua"}}
      })
    ).toEqual({
      isLoggedIn: true,
      token: "token",
      user:"joshua"
    });
  });

  it("updates state on SOCIAL_LOGIN with FACEBOOK action type", () => {
    expect(
      social(undefined, {
        type: SOCIAL_LOGIN,
        payload: {user:{username:"joshua"}}
      })
    ).toEqual({
      isLoggedIn: true,
      token: undefined,
      user:"joshua"
    });
  });

});
