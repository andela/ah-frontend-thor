import React from "react";
import  { shallow } from "enzyme";
import Header from "../../src/components/Header";

describe("test end to end test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  it("render component", () => {
    expect(wrapper.length).toEqual(1);
  });
  test("Something wiered", () => {
    expect(true).toBeTruthy();
  });
});
