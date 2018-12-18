import React from "react";
import { mount } from "enzyme";

import {
  ArticleLikes,
  LikesLayout
} from "../../src/containers/articleLikes/ArticleLikes";

describe("post like event", () => {
  const likes = 1;
  const dislikes = 1;
  const message = "";
  let wrapper;
  let mockfn = jest.fn();
  const dispatch = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <ArticleLikes
        likes={likes}
        dislikes={dislikes}
        likeAction={jest.fn()}
        likeStatusSum={jest.fn()}
      />
    );
  });
  it("click to post a like/dislike", () => {
    wrapper.find("#btnLike").simulate("click");
    wrapper
      .find("#btnDislike")
      .simulate("click");
  });

});
