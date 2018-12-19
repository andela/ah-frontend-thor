import { shallow } from "enzyme";
import React from "react";
import Footer from "../../src/components/Footer";

describe("Tests the mounted Footer component", () => {
  it("tests the footer of the app against the snapshot", () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
