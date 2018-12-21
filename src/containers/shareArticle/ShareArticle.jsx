import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ShareArticleFunction } from "../../actions/shareArticleAction";
export class ShareArticle extends Component{
  shareOnFacebook = () => {
    this.props.ShareArticleFunction(this.props.slug, "facebook");
  };
  shareOnTwitter = () => {
    this.props.ShareArticleFunction(this.props.slug, "twitter");
  };
  shareOnEmail = () => {
    this.props.ShareArticleFunction(this.props.slug, "email");
  };
  render() {
if(this.props.sharewithFacebook.link.link){
  window.location.replace(this.props.sharewithFacebook.link.link)
}else{
  return (
    <div className="social-view col-md-2 mb-4">
      <div className="mb-4 wow fadeIn">
        {/* <!--Card content--> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
          <p>SHARE</p>
          {/* <!-- Social buttons --> */}
          {/* <!-- Facebook --> */}
          <a className="px-2 fa-3x fb-ic btn-floating btn-fb">
            <i className="fa fa-facebook" onClick={this.shareOnFacebook} />
          </a>
          {/* <!-- Twitter --> */}
          <a className="px-2 fa-3x tw-ic btn-floating btn-tw">
            <i className="fa fa-twitter" onClick={this.shareOnTwitter} />
          </a>
          {/* <!-- Google Plus --> */}
          <a className="px-2 fa-3x li-ic btn-floating btn-gplus">
            <i className="fa fa-google-plus" onClick={this.shareOnEmail} />
          </a>
        </div>
        <div />
      </div>
    </div>
  );
}
    // window.location.replace(this.props.sharewithFacebook.link.link)

  }
}

const mapStateToProps = state => {
  return {
    sharewithFacebook: state.shareLink
  };
};

export default connect(mapStateToProps, { ShareArticleFunction })(ShareArticle);
