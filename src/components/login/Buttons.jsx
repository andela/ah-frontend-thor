/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */


import React from "react";
import renderSocialAuthButtons from "./loginHelpers";

const Buttons = (props) => {
  // eslint-disable-next-line react/prop-types
  const { facebook, twitter, google } = props.options;
  return (
    <React.Fragment>
      <div>
        <div className="form-check">
          {/* <input type="checkbox" className="form-check-input" id="materialLoginFormRemember"> </input> */}
          <label className="btn btn-outline-info">Remember me</label>
          <a className="btn btn-outline-info" href="/forgot_password">Forgot
							password?
          </a>
        </div>
      </div>

      <nav className="blog-pagination">
        <button
          className="btn btn-outline-info btn-rounded my-2 waves-effect z-depth-0"
          type="submit">Sign in
        </button>
      </nav>

      <p>Not a member?
        <a href="/signup">Register</a>
      </p>
      <p>Or signin with</p>

      {renderSocialAuthButtons({ facebook, twitter, google })}

    </React.Fragment>

	 );
};

export default Buttons;
