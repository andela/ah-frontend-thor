const initialState = {
	errors: "",
	user: null
};
export default (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN":
			if (action.payload) {
				return {
					...state,
					token: action.payload
				};
			}
			break;

		case "LOGIN_ERROR":
			if (action.payload) {
				return {
					...state,
					errors: state.errors,
					errors: action.payload
				};
			}
			break;

		default:
			return state;
	}
};
