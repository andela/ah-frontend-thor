import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	const styles = {
		backgroundColor: "#e3f2fd"
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-light" style={styles}>
			<NavLink to={"/"} className={"navbar-brand"}>
				Home
			</NavLink>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<NavLink to={"/login"} className={"navbar-brand"}>
						Login
					</NavLink>
				</div>
			</div>
		</nav>
	);
};
export default Header;
