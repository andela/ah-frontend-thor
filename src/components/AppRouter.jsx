import { BrowserRouter as Router, Route } from "react-router-dom";

import React from "react";
import { Provider } from "react-redux";
import Root from "./Root";
import Login from "./Login/Login";
import Home from "./Home";
import store from "../store";

const AppRouter = () => {
	return (
		<Provider store={store}>
			<Router>
				<React.Fragment>
					<Root>
						<div>
							<Route exact path="/" component={Home} />
							<Route path="/login" component={Login} />
							<Route path="/home" component={Home} />
						</div>
					</Root>
				</React.Fragment>
			</Router>
		</Provider>
	);
};
export default AppRouter;
