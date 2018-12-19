import React from "react";

class SignOut extends React.Component {
  logout(){
    localStorage.clear();
    window.location.href = '/';
  }
  render() {
    return this.logout();
  }
}

export default SignOut;
