/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import React from "react";
import renderSocialAuthButtons from "./loginHelpers";


const Buttons = (props) => {
  // eslint-disable-next-line react/prop-types
  const { facebook, twitter, google } = props.options;
  return (
    <React.Fragment>
      <div>
        <div className="form-check">
          <label className="btn btn-outline-info">Remember me</label>
          <a className="btn btn-outline-info" href="">Forgot
							password?
          </a>
        </div>
      </div>

      <nav className="blog-pagination">
        <button
          className="btn btn-outline-info btn-rounded my-2 waves-effect z-depth-0"
          type="submit"
        >Sign in
        </button>
      </nav>

      <p>Not a member?
        <a href="">Register</a>
      </p>

      {renderSocialAuthButtons({ facebook, twitter, google })}

    </React.Fragment>

	 );
};

export default Buttons;
