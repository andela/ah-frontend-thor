/* eslint-disable array-callback-return */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-destructuring */
import React from "react";
import SocialAuthButtons from "./SocialAuthButtons";

const renderSocialAuthButtons = (props) => {
  const { facebook, twitter, google } = props;
  const buttons = ["f", "t", "g"];
  let [className1, className2] = ["", ""];
  return (
    buttons.map( tag => {

      if (tag === "f"){
        className1 = facebook.className1;
        className2 = facebook.className2;
        SocialAuthButton(className1, className2);
      } else if (tag === "t") {
        className1 = twitter.className1;
        className2 = twitter.className2;
        SocialAuthButton(className1, className2);
      }else {
        className1 = tag === "g" ? google.className1: null;
        className2 = tag === "g" ? google.className2: null;
        SocialAuthButton(className1, className2);
      }

    }
    )
  );
};

const SocialAuthButton =(className1, className2) => (<SocialAuthButtons key={className1} className1={className1} className2={className2} />);


export default renderSocialAuthButtons;
