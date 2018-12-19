import toastr from "toastr";

const userState = {
  message: ""
};

export const userVerifiedReducer = (state = userState, action) => {
  switch (action.type) {
  case "USER_VERIFIED":
    setTimeout(() => window.location.replace("/login"), 3000);
    toastr.success("Verification is complete. Continue to login");
    return {
      ...state,
      message: action.payload
    };
  default:
    return state;
  }
};

export default userVerifiedReducer;
