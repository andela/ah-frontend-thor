/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { SingleArticleAction } from "../../actions/singleArticleAction";
import Follow, {RelatedArticles} from "../../components/Follow";

export const SocialMediaSection = () => (
  // <!--Grid column-->
  <div className="social-view col-md-2 mb-4">
    <div className="mb-4 wow fadeIn">
      {/* <!--Card content--> */}

      {/* <!-- Grid column --> */}
      <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
        <p>SHARE</p>
        {/* <!-- Social buttons --> */}
        {/* <!-- Facebook --> */}
        <a className="px-2 fa-3x fb-ic btn-floating btn-fb">
          <i className="fa fa-facebook" />
        </a>
        {/* <!-- Twitter --> */}
        <a className="px-2 fa-3x tw-ic btn-floating btn-tw">
          <i className="fa fa-twitter" />
        </a>
        {/* <!-- Google Plus --> */}
        <a className="px-2 fa-3x li-ic btn-floating btn-gplus">
          <i className="fa fa-google-plus" />
        </a>
        <p>CLAP</p>
        <a className="px-2 fb-ic btn-floating btn-fb">
          <i className="fa-3x fa fa-sign-language" />
          <span className="w3-badge">9</span>
        </a>
      </div>
      <div />
    </div>
  </div>
);

export const TagSection = tags => {
  let tagValues
  if(tags.tags){
    tagValues = tags.tags.map((tag, index) => (
      <span className="badge badge-pill badge-info tags" key={index}>
        {tag}
      </span>
    ));
  }
  return (
    <div>
      <p>
        Tags:
        {tagValues}
      </p>
    </div>
  );
};

export const ArticleSection = ({
  img,
  description,
  body,
  author,
  publishDate,
  readTime,
  tags
}) => (
  <div className="col-md-6 mb-4">
    {/* <!--Featured Image--> */}
    <div className="card mb-4 wow fadeIn">
      <img src={img} className="img-fluid" alt="" />
    </div>
    {/* <!--/.Featured Image--> */}

    <div className="card mb-4 wow fadeIn">
      {/* <!--Card content--> */}
      <div className="card-body">
        <p className="read__time">{readTime}</p>
        <p className="h5 my-4">{description}</p>
        <p>{body}</p>
        <p className="publish__date">
            Published on:
          <Moment format="YYYY/MM/DD">{publishDate}</Moment>
        </p>
        <p>
            By:
          {author}
        </p>
      </div>

      <hr />
      <TagSection tags={tags} />
    </div>
  </div>
);


export const  Aside = () => {
  return (
    <div className="col-md-4 mb-4">
      <Follow />
      <div className="card mb-4 wow fadeIn">
        <div className="card-header">Related articles</div>
        <RelatedArticles />
      </div>

    </div>
  );
};




export class SingleArticle extends Component {
  componentDidMount() {
    const id = localStorage.getItem("articleId");
    this.props.singleArticleAction(id);
  }
  render() {
    const article = this.props.Article.article;
    const author = localStorage.getItem("articleAuthor");
    return (
      <div>
        <main className="mt-5 pt-5">
          <main className="container">
            <section className="mt-4">
              {/* <!--Grid row--> */}
              <div className="row">
                <SocialMediaSection />
                <ArticleSection
                  img={article.image_url}
                  description={article.description}
                  body={article.body}
                  publishDate={article.created_at}
                  author={author}
                  readTime={article.read_time}
                  tags={article.tag_list}
                />
                <Aside />
              </div>
            </section>
          </main>
        </main>
      </div>
    );
  }
}


export const mapStateToProps = state => ({ Article: state.article });

export const mapDispatchToProps = dispatch => ({
  singleArticleAction: id => dispatch(SingleArticleAction(id))
});

const Article = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleArticle);
export default Article;
