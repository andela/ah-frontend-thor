import React from "react";
import { shallow, mount } from "enzyme";
import { ProfileImage } from "../../src/components/ProfileImage";

it("test profile image html", () => {
  localStorage.setItem("username", "kalyango");
  const username = localStorage.getItem("username");
  const props = {profile:{
    user:{image: "http://image.jpg"}
  }}
  const component = shallow(
    <ProfileImage fetchProfile={jest.fn()} {...props}/>
  );
});
it("test profile image html", () => {
  localStorage.setItem("username", "kalyango");
  const username = localStorage.getItem("username");
  const props = {profile:{
    user:{image: ""}
  }}
  const component = shallow(
    <ProfileImage fetchProfile={jest.fn()} {...props}/>
  );
});
