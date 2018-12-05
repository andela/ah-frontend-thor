import React from "react";

const Input = ({onChange, type, id, innerHtml})=>{
	return (
		<React.Fragment>
			<div className="md-form">
			<input type={type} id={id} className="form-control" onChange={onChange}/>
				<label htmlFor={id}>{innerHtml}</label>
			</div>
		</React.Fragment>
	);
}

export default Input;
