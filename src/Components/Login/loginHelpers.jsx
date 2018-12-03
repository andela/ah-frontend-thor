import React from "react";
import SocialAuthButtons from "./SocialAuthButtons";

const renderSocialAuthButtons = (props) => {
	const { facebook, twitter, google } = props;
	const buttons = ["f", "t", "g"];
	let [classN1, classN2] = ["", ""];
	return ( 
		buttons.map( tag => {

			if (tag === "f"){
				classN1 = facebook.classN1;
				classN2 = facebook.classN2;
				SocialAuthButton(classN1, classN2);
			} else if (tag === "t") {
				classN1 = twitter.classN1;
				classN2 = twitter.classN2;
				SocialAuthButton(classN1, classN2);
			}else {
				classN1 = tag === "g" ? google.classN1: null;
				classN2 = tag === "g" ? google.classN2: null;
				SocialAuthButton(classN1, classN2);
			}
			
			}
		)
	);
}

const SocialAuthButton =(classN1, classN2) => (<SocialAuthButtons key={classN1} classN1={classN1} classN2={classN2} />);


export default renderSocialAuthButtons;
