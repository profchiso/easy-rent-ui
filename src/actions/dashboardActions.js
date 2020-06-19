import axios from 'axios';

const BASE_URL = 'https://easy-rent-api.herokuapp.com/easy-rent/api/v1';

export const updatePassword = () => {
	return async (dispatch) => {
		try {
			const appartments = await axios.patch(
				`${BASE_URL}/users/update-password`,
				{
					method: 'PATCH',
					headers: {
						'content-type': 'application/json',
						authorization: `Bearer ${localStorage.token}`,
					},
				}
			);

			dispatch(setUpdatePasswordData(appartments));
		} catch (error) {
			console.log(error);
		}
	};
};

export const setUpdatePasswordData = (data) => {
	return {
		type: 'SET_UPDATE_PASSWORD_DATA',
		payload: data,
	};
};
