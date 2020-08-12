import axios from "axios";
const oauthURL =
	"https://easy-rent-api.herokuapp.com/easy-rent/api/v1/users/oauth/authorize";
export const facebookAuth = (userData) => {
	console.log(userData);
	return async (dispatch) => {
		try {
			const registeredUser = await axios.post(oauthURL, userData);

			if (registeredUser.data.statusCode === 200) {
				dispatch(saveFacebookAuthDataToState(registeredUser.data));
			} else {
				dispatch(facebookAuthError(registeredUser.data));
			}
		} catch (error) {
			console.log(error);
			dispatch(facebookAuthError(error));
		}
	};
};
export const saveFacebookAuthDataToState = (registeredUserData) => {
	return {
		type: "SAVE_FACEBOOK_USER_DATA",
		payload: registeredUserData,
	};
};

export const facebookAuthError = (err) => {
	return {
		type: "FACEBOOK_ERROR",
		payload: err,
	};
};

export const twitterAuth = (userData) => {
	return async (dispatch) => {
		try {
			const registeredUser = await axios.post(oauthURL, userData);

			if (registeredUser.data.statusCode === 200) {
				dispatch(saveTwitterAuthDataToState(registeredUser.data));
			} else {
				dispatch(twitterAuthError(registeredUser.data));
			}
		} catch (error) {
			console.log(error);
			dispatch(twitterAuthError(error));
		}
	};
};
export const saveTwitterAuthDataToState = (registeredUserData) => {
	return {
		type: "SAVE_TWITTER_USER_DATA",
		payload: registeredUserData,
	};
};

export const twitterAuthError = (err) => {
	return {
		type: "TWITTER_ERROR",
		payload: err,
	};
};

export const googleAuth = (userData) => {
	return async (dispatch) => {
		try {
			const registeredUser = await axios.post(oauthURL, userData);

			if (registeredUser.data.statusCode === 200) {
				dispatch(saveGoogleAuthDataToState(registeredUser.data));
			} else {
				dispatch(googleAuthError(registeredUser.data));
			}
		} catch (error) {
			console.log(error);
			dispatch(googleAuthError(error));
		}
	};
};
export const saveGoogleAuthDataToState = (registeredUserData) => {
	return {
		type: "SAVE_GOOGLE_USER_DATA",
		payload: registeredUserData,
	};
};

export const googleAuthError = (err) => {
	return {
		type: "GOOGLE_ERROR",
		payload: err,
	};
};
