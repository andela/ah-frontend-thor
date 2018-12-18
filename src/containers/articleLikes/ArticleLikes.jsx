import React, { Component } from "react";
import { articleLikes, sumArticleLikes } from "../../actions/articleLikes";
import { connect } from "react-redux";

export const LikesLayout = props => {
  const { like, dislike, likeHandler } = props;
  return (
    <div>
      <button className="btn-lg" id="btnLike" name="like" onClick={likeHandler}>
        <img src="../../images/like.png" />
      </button>{" "}
      &nbsp;
      <span>{like}</span> &nbsp;
      <button
        className="btn-lg"
        id="btnDislike"
        name="dislike"
        onClick={likeHandler}
      >
        <img src="../../images/dislike.png" />
      </button>{" "}
      &nbsp;
      <span>{dislike}</span>
    </div>
  );
};
export class ArticleLikes extends Component {
  clickHandler = event => {
    let id = localStorage.getItem("articleId");
    if (event.target.name == "like") {
      let data = { like_status: "like" };
      this.props.likeAction(id, data);
    } else if (event.target.name == "dislike") {
      let data = { like_status: "dislike" };
      this.props.likeAction(id, data);
    }
  };

  componentDidMount() {
    const id = localStorage.getItem("articleId");
    this.props.likeStatusSum(id);
  }

  render() {
    const { likes, dislikes } = this.props;
    return (
      <main className="mt-5 container row">
        <div className="col-md-6 ">
          <LikesLayout
            like={likes}
            dislike={dislikes}
            likeHandler={this.clickHandler}
          />
        </div>
      </main>
    );
  }
}

export const mapStateToProps = ({ likeReducer }) => ({
  likes: likeReducer.likes,
  dislikes: likeReducer.dislikes
});

export const mapDispatchToProps = dispatch => ({
  likeAction: (id, data) => dispatch(articleLikes(id, data)),
  likeStatusSum: id => dispatch(sumArticleLikes(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleLikes);
