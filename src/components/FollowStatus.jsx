/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from "react";
import {connect} from "react-redux";
import followStatus from "../actions/followingStatusAction";
import followedStatus from "../actions/followStatusActions";


class FollowStatus extends Component {
  state = {
    followedUsername: localStorage.getItem("username")
  };

  componentWillMount(){
    const {followedUsername} = this.state;
    const { getFollowStatus, getfollowedStatus} = this.props;
    getFollowStatus(followedUsername);
    getfollowedStatus(followedUsername);

  }

  render() {
    const { followStatusReducer, followingStatusReducer } = this.props;
    return (
      <div className="card mb-3 text-center wow fadeIn">

        <div className="card-header">My Activity
          <nav className="blog-pagination">
            <a className="btn  btn-outline-blue btn-lg" href="#">Following {!followingStatusReducer.results ? 0 : followingStatusReducer.results.length}

            </a>
            <a className="btn  btn-outline-blue btn-lg" href="#">Followers {!followStatusReducer.results ? 0 : followStatusReducer.results.length}

            </a>
            <a className="btn  btn-outline-blue btn-lg" href="#">Total Views 6

            </a>
            <a className="btn  btn-outline-blue btn-lg" href="#">Favorites 6

            </a>
            <a className="btn  btn-outline-blue btn-lg" href="#">Bookmarked 6

            </a>
          </nav>

        </div>
      </div>
    );
  }
}

export const mapStateToProps = ({followStatusReducer, followingStatusReducer}) => ({
  followStatusReducer,
  followingStatusReducer
});

export const mapDispatchToProps = dispatch => ({
  getFollowStatus: followedUsername => dispatch(followStatus(followedUsername)),
  getfollowedStatus: followedUsername => dispatch(followedStatus(followedUsername))
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowStatus);
