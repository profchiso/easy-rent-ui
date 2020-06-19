import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { oauthReducer } from './oauthReducer';

export default combineReducers({
	registerReducer,
	oauthReducer,
});
