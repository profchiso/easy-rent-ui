
import axios from "axios";
export const register =(userData)=>{
    return async (dispatch) => {
        try {
            const registeredUser = await  axios.post("https://easy-rent-api.herokuapp.com/easy-rent/api/v1/users/signup",userData)

            if(registeredUser.status==="201"){
                dispatch(saveRegisteredUserDataToSate(registeredUser.data))
            }else{
                dispatch(registrationError(registeredUser.data)) 
            }
        } catch (error) {
            console.log(error)
            dispatch(registrationError(error)) 
        }
    }
}

export const login =(userData)=>{
    return async (dispatch) => {
        try {
            const loggedInUser = await  axios.post("https://easy-rent-api.herokuapp.com/easy-rent/api/v1/users/login",userData)

            if(loggedInUser.status==="200"){
                dispatch(saveLoginUserDataToSate(loggedInUser.status))
            }else{
                dispatch(loginError(loggedInUser.data))
            }
        } catch (error) {
            console.log(error)
            dispatch(loginError(error))
        }
    }
}
export const saveRegisteredUserDataToSate=(registeredUserData)=>{
    return{
        type:"SAVE_REGISTERED_USER_DATA",
        payload:registeredUserData
    }
}

export const saveLoginUserDataToSate=(loggedInUserData)=>{
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