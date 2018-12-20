import React, { Component } from "react";
import bookmarkslist from "../../actions/bookmarksAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const clickHandler = bookmarkedArticle => event => {
  const id = bookmarkedArticle.id;
  localStorage.setItem("articleId", id);
};
export const CardLayout = props => {
  const { title, description, image_url } = props.bookmark;
  const clickHandler = props.clickHandler;
  return (
    <div className="text-center mb-4 wow fadeIn card">
      <div className="card-body">
        <Link
          to="/article"
          className="card-title"
          id="articleLink"
          onClick={clickHandler}>
          {title}
        </Link>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};
export class Bookmarks extends Component {
  componentWillMount() {
    this.props.bookmarks;
  }
  render() {
    const { lists } = this.props;
    return (
      <main className="mt-5 pt-5 container  row">
        <div className="col-md-6 mb-3 offset-md-3">
          <h2>BOOKMARKS</h2>
          {lists.map((list, index) => (
            <CardLayout
              key={index}
              bookmark={list}
              clickHandler={clickHandler(list)}
            />
          ))}
        </div>
      </main>
    );
  }
}

export const mapStateToProps = ({ listReducer }) => ({
  lists: listReducer.list
});

export const mapDispatchToProps = dispatch => ({
  bookmarks: dispatch(bookmarkslist)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookmarks);


