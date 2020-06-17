const initialState = {
	token: '',
	user: {},
	isSuccessful: false,
	error: {},
	passwordResetResponse: {},
};

export const oauthReducer = (state = initialState, actions) => {
	const { type, payload } = actions;
	console.log(type);
	console.log(payload);

	if (
		type === 'SAVE_FACEBOOK_USER_DATA' ||
		type === 'SAVE_TWITTER_USER_DATA' ||
		type === 'SAVE_GOOGLE_USER_DATA'
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
	} else if (
		type === 'FACEBOOK_ERROR' ||
		type === 'TWITTER_ERROR' ||
		type === 'GOOGLE_ERROR'
	) {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		return {
			...state,
			error: payload,
			isSuccessful: true,
		};
	}

	return state;
};
