const initialState = {
	token: '',
	user: {},
	isSuccessful: false,
	error: {},
	passwordResetResponse: {},
};

export const dashboardReducers = (state = initialState, actions) => {
	const { type, payload } = actions;
	console.log(type);
	console.log(payload);

	if (
		type === 'SET_UPDATE_PASSWORD_DATA' ||
		type === 'SAVE_LOGGED_IN_USER_DATA'
	) {
		localStorage.setItem('token', JSON.stringify(payload.token));
		localStorage.setItem('user', JSON.stringify(payload.user));
		return {
			...state,
			token: payload.token,
			user: payload.user,
			isSuccessful: true,
			error: {},
		};
	} else if (type === 'REGISTRATION_ERROR' || type === 'LOGIN_ERROR') {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		return {
			...state,
			error: payload,
			isSuccessful: true,
		};
	} else if (type === 'LOGOUT') {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		return {
			...state,
			user: {},
			isSuccessful: false,
			token: '',
		};
	} else if (type === 'SET_PASSWORD_RESET_RESPONSE') {
		return {
			...state,
			passwordResetResponse: payload,
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
