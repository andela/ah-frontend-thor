import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { SingleArticleAction } from "../../actions/singleArticleAction";
import ShareArticle from "../shareArticle/ShareArticle";
import { showCard } from "../shareArticle/DisplaySharedArticle";

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
      {showCard(readTime,description,body,publishDate,author)}

      <hr />
      <TagSection tags={tags} />
    </div>
  </div>
);

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
                <ShareArticle slug={this.props.Article.article.slug} />
                <ArticleSection
                  img={article.image_url}
                  description={article.description}
                  body={article.body}
                  publishDate={article.created_at}
                  author={author}
                  readTime={article.read_time}
                  tags={article.tag_list}
                />
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
