import React,{ Component } from "react";
import { connect } from "react-redux";
import login from "../../actions/loginActions";
import Form from "./Form";


class Login extends Component {
	state = {
		email: "",
		password: "",
		options
	};

	loginUser = e => {
		e.preventDefault();
		const { email, password} = this.state;
		
		if (email && password){
			this.props.loginUser({ email, password});
		};
	};


	onChangeEmail = e =>{
		this.setState({ email: e.target.value});
	}

	onChangePassword = e =>{
		this.setState({ password: e.target.value});
	}
	
	render() {
		
		return (
			<main className="mt-5 pt-5">
					<div className="container">
							<section className="mt-4">
								<Form 
									onSubmit={this.loginUser}
									auth={this.props.auth}
									onChangeEmail={this.onChangeEmail}
									onChangePassword={this.onChangePassword}
									options={this.state.options}
								/>																	
							</section>

					</div>
			</main>
			
		);
	}
}


const options = {
	"facebook":{"classN1": "btn-floating btn-fb btn-lg", "classN2": "fa fa-facebook"},
	"twitter": {"classN1": "btn-floating btn-tw btn-lg", "classN2": "fa fa-twitter"},
	"google": { "classN1": "btn-floating btn-gplus btn-lg", "classN2": "fa fa-google-plus"}
}


const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    loginUser: loginData => dispatch(login(loginData))
});
export default connect(mapStateToProps , mapDispatchToProps)(Login);
