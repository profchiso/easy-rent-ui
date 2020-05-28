
import axios from "axios";
export const register =(userData)=>{
    return async (dispatch) => {
        try {
            const registeredUser = await  axios.post("https://easy-rent-api.herokuapp.com/easy-rent/api/v1/users/signup",userData)
        
            if(registeredUser.data.statusCode===201){
                dispatch(saveRegisteredUserDataToState(registeredUser.data))
            }else{
                dispatch(registrationError(registeredUser.data)) 
            }
        } catch (error) {
            console.log(error)
            dispatch(registrationError(error)) 
        }
    }
}
export const saveRegisteredUserDataToState=(registeredUserData)=>{
    return{
        type:"SAVE_REGISTERED_USER_DATA",
        payload:registeredUserData
    }
}

export const login =(userData)=>{
    return async (dispatch) => {
        try {
            const loggedInUser = await  axios.post("https://easy-rent-api.herokuapp.com/easy-rent/api/v1/users/login",userData)
            if(loggedInUser.data.statusCode===200){
                dispatch(saveLoginUserDataToState(loggedInUser.data))
            }else{
                dispatch(loginError(loggedInUser.data))
            }
        } catch (error) {
            console.log(error)
            dispatch(loginError(error))
        }
    }
}

export const saveLoginUserDataToState=(loggedInUserData)=>{
    return{
        type:"SAVE_LOGGED_IN_USER_DATA",
        payload:loggedInUserData
    }
}

export const registrationError=(err)=>{
    return{
        type:"REGISTRATION_ERROR",
        payload:err
    }
}


export const loginError=(err)=>{
    return{
        type:"LOGIN_ERROR",
        payload:err
    }
}

export const logout=()=>{
    return{
        type:"LOGOUT"
    }
}
export const forgotPassword=(userData)=>{
    return async (dispatch) => {
        try {
            const user = await  axios.post("https://easy-rent-api.herokuapp.com/easy-rent/api/v1/users/forgot-password",userData,{
				headers: {
					'content-type': 'application/json',
				},
			})
            console.log(user)

            if(user.data.statusCode===200){
                dispatch(savePasswordResetResponseToState(user.data))
            }else{
                dispatch(savePasswordResetResponseToState(user.data))
            }
        } catch (error) {
            console.log(error)
            dispatch(savePasswordResetResponseToState(error))
        }
    }
}
export const savePasswordResetResponseToState=(res)=>{
    return{
        type:"SET_PASSWORD_RESET_RESPONSE",
        payload:res
    }
}
export const clearErrorMessage=()=>{
    return{
        type:"CLEAR_ERROR_MESSAGE"
    }
}



export const updatePassword=(userData)=>{
    return async (dispatch) => {
        try {
            const user = await  axios.patch("https://easy-rent-api.herokuapp.com/easy-rent/api/v1/users/update-password",userData,{
				headers: {
					'content-type': 'application/json',
				},
			})
            console.log(user)

            if(user.data.statusCode===200){
                dispatch(savePasswordResetResponseToState(user.data))
            }else{
                dispatch(savePasswordResetResponseToState(user.data))
            }
        } catch (error) {
            console.log(error)
            dispatch(savePasswordResetResponseToState(error))
        }
    }
}