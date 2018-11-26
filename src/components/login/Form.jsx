/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
import React from "react";
import Buttons from "./Buttons";
import Input from "./Input";


const Form = ({ onSubmit, auth, onChangeEmail, onChangePassword , options}) => {
  return (
    <div className="row">
      <div className="col-md-6 mb-3 offset-md-3">
        <div className="text-center mb-4 wow fadeIn">

          <div className="card">

            <h5 className="card-header black white-text text-center mt-0 py-4">
              <strong>Sign in</strong>
            </h5>

            <div className="card-body px-lg-5 pt-5">
              <form id="loginForm" className="text-center" onSubmit={onSubmit}>
                <div>
                  {auth.errors &&  <span id="sp" style={{"color":"red", "display":"block"}}> {auth.errors}</span>	}
                </div>

                <Input onChange={onChangeEmail}
                  type={"email"} id={"materialLoginFormEmail"} innerHtml={"Email"}
                />
                <Input onChange={onChangePassword}
                  type={"password"} id={"materialLoginFormPassword"} innerHtml={"Password"}
                />

                <div className="d-flex justify-content-around">

                </div>
                <Buttons options={options}/>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
	 );
};

export default Form;
