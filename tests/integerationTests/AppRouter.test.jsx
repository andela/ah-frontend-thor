import { shallow } from "enzyme";
import React from "react";
import AppRouter from "../../src/components/AppRouter";

describe("Tests the mounted Footer component", () => {
  it("tests the footer of the app against the snapshot", () => {
    const component = shallow(<AppRouter />);
    expect(component).toMatchSnapshot();
  });
});
