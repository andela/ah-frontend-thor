import React from "react";

const SocialAuthButtons = ({ className1, className2 }) => {
	return (
		<React.Fragment>
			<a className={className1}>
					<i className={className2}></i>
			</a>
		</React.Fragment>
	);
}

export default SocialAuthButtons;
