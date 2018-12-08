/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
import React, { Component } from "react";
import { connect } from "react-redux";
import follow from "../actions/followActions";
import followStatus from "../actions/followingStatusAction";
import unfollow from "../actions/unfollowActions";

export const RelatedArticles = () => {
  return (
    <div className="card-body">

      <ul className="list-unstyled">
        <li className="media">
          <img className="d-flex mr-3" src="https://mdbootstrap.com/img/Photos/Others/placeholder7.jpg"
            alt="Generic placeholder image"/>
          <div className="media-body">
            <a href="">
              <h5 className="mt-0 mb-1 font-weight-bold">List-based media object</h5>
            </a>
              Cras sit amet nibh libero, in gravida nulla (...)
          </div>
        </li>
        <li className="media my-4">
          <img className="d-flex mr-3" src="https://mdbootstrap.com/img/Photos/Others/placeholder6.jpg"
            alt="An image"/>
          <div className="media-body">
            <a href="">
              <h5 className="mt-0 mb-1 font-weight-bold">List-based media object</h5>
            </a>
              Cras sit amet nibh libero, in gravida nulla (...)
          </div>
        </li>
        <li className="media">
          <img className="d-flex mr-3" src="https://mdbootstrap.com/img/Photos/Others/placeholder5.jpg"
            alt="Generic placeholder image"/>
          <div className="media-body">
            <a href="">
              <h5 className="mt-0 mb-1 font-weight-bold">List-based media object</h5>
            </a>
              Cras sit amet nibh libero, in gravida nulla (...)
          </div>
        </li>
      </ul>

    </div>
  );
};


class Follow extends Component {
  state = {
    followedByUser: [],
    followingUsername: localStorage.getItem("username"),
    followedUsername: localStorage.getItem("articleAuthor")
  };

  componentWillMount(){
    const {followedUsername} = this.state;
    const { getFollowStatus} = this.props;
    getFollowStatus(followedUsername);

  }

  followUser ( followedUsername){
    // event.preventDefault();

    const { followUser } = this.props;
    followUser(followedUsername);
  };

  unfollowUser ( followedUsername){
    // event.preventDefault();

    const { unfollowUser} = this.props;
    unfollowUser(followedUsername);
  };


  render() {
    const { followedUsername } = this.state;
    const { results }  = this.props;

    return (
      <React.Fragment>
        <div className="card cloudy-knoxville-gradient mb-4 wow fadeIn">
          <div className="card-header font-weight-bold">
            <span>About author</span>
          </div>

          <div className="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" className="rounded-circle"
              alt="woman avatar"/>
          </div>

          <div className="card-body">

            <h4 className="card-title">{followedUsername}</h4>
            <hr/>

            <p><i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Eos, adipisci
            </p>

            {!results[0] ? <FollowButton onClick={()=>this.followUser( followedUsername)} followedUsername={followedUsername} /> :
              <UnFollowButton onClick={()=>this.unfollowUser(followedUsername)} followedUsername={followedUsername}/>}

          </div>

        </div>


        <div className="card mb-3 text-center wow fadeIn">

          <div className="card-header">Get information about new articles from Anna Doe
            <nav className="blog-pagination">
              <a className="btn  btn-outline-blue btn-lg" href="#">Subscribe
                <i className="fa fa-graduation-cap ml-2"></i>
              </a>
            </nav>
          </div>
        </div>

      </React.Fragment>
    );
  };
};

export const FollowButton = ({onClick, followedUsername}) => {
  return (
    <nav id="follow" className="blog-pagination" onClick={onClick}>
      <a className="btn  btn-outline-blue btn-lg" href="#">Follow {followedUsername}</a>
    </nav>
  );
};

export const UnFollowButton = ({onClick, followedUsername}) => {
  return (
    <nav id="unfollow" className="blog-pagination" onClick={onClick}>
      <a className="btn  btn-outline-blue btn-lg" href="#">Unfollow {followedUsername}</a>
    </nav>
  );
};

export const mapStateToProps = ({followStatusReducer}) => ({
  results: followStatusReducer.results,
});

export const mapDispatchToProps = dispatch => ({
  followUser: followedUsername => dispatch(follow(followedUsername)),
  getFollowStatus: followedUsername => dispatch(followStatus(followedUsername)),
  unfollowUser: followedUsername => dispatch(unfollow(followedUsername))
});


export default connect(mapStateToProps, mapDispatchToProps)(Follow);

