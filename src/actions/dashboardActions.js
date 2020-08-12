import axios from "axios";

const BASE_URL = "https://easy-rent-api.herokuapp.com/easy-rent/api/v1";
const CONFIG = {
	method: "PATCH",
	headers: {
		"content-type": "application/json",
		authorization: localStorage.token
			? `Bearer ${JSON.parse(localStorage.token)}`
			: null,
	},
};

export const updatePassword = (userData) => {
	return async (dispatch) => {
		try {
			const res = await axios.patch(
				`${BASE_URL}/users/update-password`,
				userData,
				CONFIG
			);

			if (res.status === 200) dispatch(setUpdatePasswordData(res.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const setUpdatePasswordData = (data) => {
	return {
		type: "SET_UPDATE_PASSWORD_DATA",
		payload: data,
	};
};
export const setUpdatePasswordError = (data) => {
	return {
		type: "SET_UPDATE_PASSWORD_ERROR",
		payload: data,
	};
};
