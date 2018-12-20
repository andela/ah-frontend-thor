import React from "react";
import { shallow } from "enzyme";

import {
  Bookmarks,
  CardLayout
} from "../../src/containers/bookmarks/Bookmarks";

describe("<Bookmarks />", () => {
  it("renders the component", () => {
    const lists = [
      { title: "now", description: "yet" },
      { title: "now2", description: "yet2" }
    ];
    const bookmarkComponent = shallow(
      <Bookmarks lists={lists} bookmarks={jest.fn()} />
    );
    expect(bookmarkComponent).toMatchSnapshot();
  });
  it("renders the cardlayout component", () => {
    const bookmarked = { title: "now", description: "yet" , image_url:"www.unsplash.com"}
    const cardLayoutComponent = shallow(
      <CardLayout bookmark = {bookmarked} />
    );
    expect(cardLayoutComponent).toMatchSnapshot();
  });
});

