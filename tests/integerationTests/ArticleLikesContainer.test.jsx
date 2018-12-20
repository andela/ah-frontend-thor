import React from "react";
import { shallow } from "enzyme";

import {
  ArticleLikes,
  LikesLayout
} from "../../src/containers/articleLikes/ArticleLikes";

describe("<ArticleLikes />", () => {
  const likes = 1;
  const dislikes = 1;
  const message = "";
  it("renders the component", () => {
    const articleLikeComponent = shallow(
      <ArticleLikes
        likes={likes}
        dislikes={dislikes}
        likeAction={jest.fn()}
        likeStatusSum={jest.fn()}
      />
    );
    expect(articleLikeComponent).toMatchSnapshot();
  });
  it("renders the cardlayout component", () => {
    const likesLayoutComponent = shallow(<LikesLayout like={likes}
      dislike={dislikes}
      likeHandler={jest.fn()}/>);
    expect(likesLayoutComponent).toMatchSnapshot();
  });

  
});
