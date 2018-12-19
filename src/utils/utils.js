/* eslint-disable no-unused-expressions */
import toastr from "toastr";


const checkUsernameEmailErrors = message =>
  message.errors.email && message.errors.username
    ? toastr.warning("Username and Email are already taken ")
    : null;

const checkEmailErrors = message =>
  message.errors.email && !message.errors.username
    ? toastr.warning("Email already taken")
    : null;
const checkUsernameErrors = message =>
  !message.errors.email && message.errors.username
    ? toastr.warning("Username already taken")
    : null;

function showNotification(message) {
  message.errors
    ? checkUsernameEmailErrors(message) ||
          checkEmailErrors(message) ||
          checkUsernameErrors(message)
    : null;
  !message.errors &&
        toastr.success(
          "Successfully registered,Check your email to confirm account"
        );
}



export default showNotification;
