import axios from "axios";
const BASE_URL = "https://easy-rent-api.herokuapp.com/easy-rent/api/v1/users";
const CONFIG = {
	headers: {
		"content-type": "application/json",
	},
};
export const register = (userData) => {
	return async (dispatch) => {
		try {
			const registeredUser = await axios.post(
				`${BASE_URL}/signup`,
				userData,
				CONFIG
			);

			if (registeredUser.status === 201)
				dispatch(saveRegisteredUserDataToState(registeredUser.data));
		} catch (error) {
			console.log("Registration error", error);
			dispatch(registrationError(error.response.data));
		}
	};
};
export const saveRegisteredUserDataToState = (registeredUserData) => {
	console.log(registeredUserData);
	return {
		type: "SAVE_REGISTERED_USER_DATA",
		payload: registeredUserData,
	};
};

export const login = (userData) => {
	return async (dispatch) => {
		try {
			const loggedInUser = await axios.post(
				`${BASE_URL}/login`,
				userData,
				CONFIG
			);

			loggedInUser.status === 200 &&
				dispatch(saveLoginUserDataToState(loggedInUser.data));
		} catch (error) {
			console.log("login error", error);
			dispatch(loginError(error.response.data));
		}
	};
};

export const saveLoginUserDataToState = (loggedInUserData) => {
	return {
		type: "SAVE_LOGGED_IN_USER_DATA",
		payload: loggedInUserData,
	};
};

export const registrationError = (err) => {
	return {
		type: "REGISTRATION_ERROR",
		payload: err,
	};
};

export const loginError = (err) => {
	return {
		type: "LOGIN_ERROR",
		payload: err,
	};
};

export const logout = () => {
	return {
		type: "LOGOUT",
	};
};
export const forgotPassword = (userData) => {
	return async (dispatch) => {
		try {
			const user = await axios.post(
				`${BASE_URL}/forgot-password`,
				userData,
				CONFIG
			);

			if (user.status === 200)
				dispatch(savePasswordResetResponseToState(user.data));
		} catch (error) {
			console.log(error);
			dispatch(savePasswordResetResponseToState(error.response.data));
		}
	};
};
export const savePasswordResetResponseToState = (res) => {
	return {
		type: "SET_PASSWORD_RESET_RESPONSE",
		payload: res,
	};
};
export const clearErrorMessage = () => {
	return {
		type: "CLEAR_ERROR_MESSAGE",
	};
};

export const updatePassword = (userData) => {
	return async (dispatch) => {
		try {
			const user = await axios.patch(
				`${BASE_URL}/update-password`,
				userData,
				CONFIG
			);

			if (user.status === 200)
				dispatch(savePasswordResetResponseToState(user.data));
		} catch (error) {
			console.log(error);
			dispatch(savePasswordResetResponseToState(error.response.data));
		}
	};
};
