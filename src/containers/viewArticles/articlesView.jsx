/* eslint-disable max-len */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GetAllArticlesAction } from "../../actions/articlesAction";

export const HomeHeaderSection = () => (
  <div>
    <section className="View card wow fadeIn">
      {/* <!-- Content --> */}
      <div className="card-body text-white text-center py-5 px-5 my-5">
        <h1 className="mb-4">
          <strong>Author's Haven</strong>
        </h1>
        <p>
          <strong>A place where words still matter</strong>
        </p>
        <Link to="/login" className="blog-pagination">
          <button className="btn  btn-outline-white btn-lg" href="#">
            Get Started
            <i className="fa fa-graduation-cap ml-2" />
          </button>
        </Link>
      </div>
      {/* <!-- Content --> */}
    </section>
  </div>
);
export const ArticleCard = ({ title, description, img, onClickHandler }) => (
  <div className="col-lg-4 col-md-6 mb-4">
    {/* Grid column */}
    {/* <div className="col-lg-4 col-md-6 mb-4"> */}
    {/* <!--Card--> */}
    <div className="card">
      {/* <!--Card image--> */}
      <div className="view overlay">
        <img
          src={img}
          className="card-img-top article__image"
          alt="article image"
        />
        {/* <a>
          <div className="mask rgba-white-slight" />
        </a> */}
        {/* </div> */}

        {/* <!--Card content--> */}
        <div className="card-body">
          {/* <!--Title--> */}
          <h4 className="card-title">{title}</h4>
          <p className="card-text article__body">{description}</p>

          <Link
            to="/article"
            className="btn btn-primary btn-md"
            id="component-btn"
            onClick={onClickHandler}
          >
            ReadMore
            <i className="fa fa-play ml-2" />
          </Link>
        </div>
        {/* </div> */}
      </div>
      {/* <!--/.Card--> */}
    </div>
  </div>
);

export class ArticleDetails extends Component {
  componentWillMount() {
    this.props.articlesActions();
  }

  onClickHandler = (id, articleAuthor) => event => {
    localStorage.setItem("articleId", id);
    localStorage.setItem("articleAuthor", articleAuthor);
  };


  articleValues(articles) {
    let values;
    if (articles) {
      values = articles.map(article => (
        <ArticleCard
          key={article.id}
          title={article.title}
          description={article.description}
          img={article.image_url}
          onClickHandler={this.onClickHandler(
            article.id,
            article.author.username
          )}
        />
      ));
      return values;
    }
  }


  render() {
    const articles = this.props.allArticles.articles.results;
    return (
      <div>
        {/* <!--Main Layout--></main> */}
        <main className="my-3">
          <div className="container">
            <section className="text-center">
              {/* <!--Grid row--> */}
              <div className="row mb-4 wow fadeIn">
                {/* <!--Grid column--> */}
                {/* Grid column */}
                {this.props.allArticles.loading === true ? (
                  <div className="center-block text-center">
                    <img
                      src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif"
                      className="loading__image"
                      alt="loading image"
                    />
                  </div>
                ) : (
                  this.articleValues(articles)
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export const mapStateToProps = state => ({ allArticles: state.articles });

export const mapDispatchToProps = dispatch => ({
  articlesActions: () => dispatch(GetAllArticlesAction)
});

const AllArticles = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetails);
export default AllArticles;
