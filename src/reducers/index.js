import { combineReducers } from 'redux';
import auth from './auth.js';
import { registerReducer } from './registerReducer';
import { oauthReducer } from './oauthReducer';

export default combineReducers({
	auth,
	registerReducer,
	oauthReducer,
});
