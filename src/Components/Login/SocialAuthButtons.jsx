import React from "react";

const SocialAuthButtons = ({ classN1, classN2 }) => {
	return (
		<React.Fragment>
			<a className={classN1}>
					<i className={classN2}></i>
			</a>
		</React.Fragment>
	);
}

export default SocialAuthButtons;
