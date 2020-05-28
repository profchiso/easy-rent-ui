const initialState={token:"",user:{}, isSuccessful:false,error:{},passwordResetResponse:{}}

export const registerReducer=(state=initialState,actions)=>{
   
    const {type,payload} = actions
    console.log(type)
    console.log(payload)

    if(type==="SAVE_REGISTERED_USER_DATA" || type==="SAVE_LOGGED_IN_USER_DATA"){
        console.log(payload)
        localStorage.setItem("token",JSON.stringify(payload.token))
        localStorage.setItem("user",JSON.stringify(payload.user))
        return{
            ...state,
            token:payload.token,
            user:payload.user,
            isSuccessful:true,
            error:{},
           
        }
    }else if(type==="REGISTRATION_ERROR" || type==="LOGIN_ERROR"){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        return{
            ...state,
            error:payload,
            isSuccessful:true
        }
    }else if(type==="LOGOUT"){
        localStorage.removeItem("token")
        return{
            ...state,
            user:{},
            isSuccessful:false,
            token:""
        }
    }else if(type==="SET_PASSWORD_RESET_RESPONSE"){
        return{
            ...state,
            passwordResetResponse:payload
        }
    }
    return state
}