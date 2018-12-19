import React from "react";
import { shallow } from "enzyme";
import SignOut from "../../src/components/SignOut";

it("test Signout", () => {
  const component = shallow(<SignOut />);
  expect(component).toMatchInlineSnapshot;
});
