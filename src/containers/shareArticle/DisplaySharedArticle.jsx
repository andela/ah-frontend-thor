import React, { Component } from "react";
import  { connect } from "react-redux";
import { displayAction } from "../../actions/displayAction";
import Moment from "react-moment";
import ShareArticle from "./ShareArticle";

export const showCard = (readTime,description,body,publishDate,author) => {
return (<div className="card-body">
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
</div>);
}
export const ArticleSection = ({
  img,
  description,
  body,
  author,
  publishDate,
  readTime
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

    </div>
  </div>
);
export class DisplaySharedArticle extends Component {
  componentDidMount(){
    const slug = this.props.match.params.slug
this.props.displayAction(slug);
  }
render (){
  const article = this.props.displayResults.display;
if(this.props.displayResults.display.author){
  const author = this.props.displayResults.display.author.username;
localStorage.setItem("userr", author);
}
  return <div>
  <main className="mt-5 pt-5">
    <main className="container">
      <section className="mt-4">
        {/* <!--Grid row--> */}
        <div className="row">
          <ShareArticle slug={this.props.displayResults.display.slug} />
          <ArticleSection
            img={article.image_url}
            description={article.description}
            body={article.body}
            publishDate={article.created_at}
            author={localStorage.getItem("userr")}
            readTime={article.read_time}
          />
        </div>
      </section>
    </main>
  </main>
</div>;
}
}
export const mapStateToProps = state =>{
return {
displayResults: state.display
};
}
export default connect(mapStateToProps, { displayAction })(DisplaySharedArticle);
