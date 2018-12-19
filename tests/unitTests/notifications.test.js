import toastr from "toastr";
import showNotification from "../../src/utils/utils";

describe("tests the showing notifications", () => {
  it("should test the running of show notifications", () => {
    const errors = {
      errors: {
        email: "email already taken",
        username: "Username already taken"
      }
    };
    showNotification(errors, toastr);
    const usernameErrors = {
      errors: {
        username: "Username already taken"
      }
    };
    showNotification(usernameErrors, toastr);

    showNotification(errors, toastr);
    const emailErrors = {
      errors: {
        email: "Email already taken"
      }
    };
    showNotification(emailErrors, toastr);
  });
});
