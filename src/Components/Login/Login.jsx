import React,{ Component } from "react";
import { connect } from "react-redux";
import login from "../../actions/loginActions";
import Form from "./Form";


const options = {
	"facebook":{"className1": "btn-floating btn-fb btn-lg", "className2": "fa fa-facebook"},
	"twitter": {"className1": "btn-floating btn-tw btn-lg", "className2": "fa fa-twitter"},
	"google": { "className1": "btn-floating btn-gplus btn-lg", "className2": "fa fa-google-plus"}
}

class Login extends Component {
	state = {
		email: "",
		password: "",
		options
	};

	loginUser = event => {
		e.preventDefault();
		const { email, password} = this.state;
		
		if (email && password){
			this.props.loginUser({ email, password});
		};
	};


	onChangeEmail = event =>{
		this.setState({ email: event.target.value});
	}

	onChangePassword = event =>{
		this.setState({ password: event.target.value});
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


const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    loginUser: loginData => dispatch(login(loginData))
});
export default connect(mapStateToProps , mapDispatchToProps)(Login);