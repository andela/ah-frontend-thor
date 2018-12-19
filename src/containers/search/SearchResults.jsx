import React, { Component } from "react";
import { connect } from "react-redux";
import getSearchData from "../../actions/getSearchDataAction";
import { Link } from "react-router-dom";

export const onClickHandler = (id, articleAuthor) => event => {
  localStorage.setItem("articleId", id);
  localStorage.setItem("articleAuthor", articleAuthor);
};

export class SearchResults extends Component {
  componentDidMount() {
    this.props.getSearchData(
      this.props.match.params.type,
      this.props.match.params.searchData
    );
  }
  searchedArticles = (id, name, title) => {
    return (
      <div className="card-body">
        <Link
          to={"/article"}
          id="articleResult"
          name="articleResult"
          onClick={onClickHandler(id, name)}
        >
          <h4 className="card-title">{title}</h4>
        </Link>
        <p className="card-text">
          <b>Author</b>:{name}
        </p>
      </div>
    );
  };
  searchFound() {
    return Array.from(this.props.searchResults).map(data => (
      <div key={data.id}>
        <main className="my-3">
          <div className="container">
            <section className="articles">
              <div className="col-lg-12 col-md-12 mb-12">
                <div className="card">
                  {this.searchedArticles(
                    data.id,
                    data.author.username,
                    data.title
                  )}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    ));
  }
  SearchNotFound() {
    return (
      <div >
        <h3>Article(s) not found !!!..</h3>
      </div>
    );
  }

  render() {
    if (this.props.searchResults.length === undefined) {
      return (
        <div className="loading-image">
          <img src="https://res.cloudinary.com/dksxmwjqs/image/upload/v1544619488/em3oq7jnnea8bsqkets3.gif" />
        </div>
      );
    } else if (
      this.props.searchResults.length !== undefined &&
      this.props.searchResults.length !== 0
    ) {
      return <div className="found">{this.searchFound()}</div>;
    } else {
      return <div className={"search-not-found"}>{this.SearchNotFound()}</div>;
    }
  }
}

export const mapStateToProps = state => ({
  searchResults: state.search.items
});
export default connect(
  mapStateToProps,
  { getSearchData }
)(SearchResults);
