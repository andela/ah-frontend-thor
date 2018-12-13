import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getAuthorArticles } from "../../actions/articleActions";

class PublishedArticles extends Component {
  componentWillMount() {
    this.props.getAuthorArticles();
  }

  publishedArticleHelper = (imageUrl, title, description, id) => {
    
    const data = (
      <li className="media">
        <img
          className="d-flex mr-3 profile-card-image"
          src={imageUrl}
          alt=""
        />
        <div className="media-body">
          <h5 className="mt-0 mb-1 font-weight-bold">{title}</h5>
          {description}
        </div>
        <a
          className="btn btn-info btn-md pull-right"
          href={`/edit_article/${id}`}
        >
          Edit
        </a>
      </li>
    );
    return data;
  }

  render() {
    const articleItems = Object.values(this.props.articles).map(article => (
      <div key={article.id}>
        {this.publishedArticleHelper(article.image_url, article.title, article.description, article.id)}
      </div>
    ));
    return (
      <div className="col-md-8 mb-4">
        <div className="card-header">Published Articles</div>
        <div className="card-body">
          <ul className="list-unstyled">{articleItems}</ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ articleReducer }) => ({
  articles: articleReducer.articles,
});
const mapActionsToProps = dispatch => ({
  getAuthorArticles: () => dispatch(getAuthorArticles())
});
export default connect(
  mapStateToProps,
  mapActionsToProps
)(PublishedArticles);
