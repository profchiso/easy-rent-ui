import {combineReducers} from "redux"
import auth from "./auth.js"
import {registerReducer} from "./registerReducer"


export default combineReducers({
    auth,
    registerReducer
})

