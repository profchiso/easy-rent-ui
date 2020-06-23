const initialState = {
	token: '',
	user: {},
	isSuccessful: false,
	error: {},
	passwordResetResponse: {},
	isPasswordUpdated: false,
};

export const dashboardReducers = (state = initialState, actions) => {
	const { type, payload } = actions;
	console.log(type);
	console.log(payload);

	if (type === 'SET_UPDATE_PASSWORD_DATA') {
		localStorage.setItem('token', JSON.stringify(payload.token));

		return {
			...state,
			token: payload.token,
			isSuccessful: true,
			error: {},
			isPasswordUpdated: true,
		};
	} else if (type === 'SET_UPDATE_PASSWORD_ERROR') {
		// localStorage.removeItem('token');
		// localStorage.removeItem('user');
		return {
			...state,
			error: payload,
			isSuccessful: false,
			isPasswordUpdated: false,
		};
	} else if (type === 'CLEAR_ERROR_MESSAGE') {
		return {
			...state,
			error: {},
			passwordResetResponse: {},
		};
	}

	return state;
};
