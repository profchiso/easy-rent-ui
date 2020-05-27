const initialState={token:"",user:{}, isSuccessful:false,error:{}}

export const registerReducer=(state=initialState,actions)=>{
    const {type,payload} = actions
    console.log(type)
    console.log(payload)

    if(type==="SAVE_REGISTERED_USER_DATA" || type==="SAVE_LOGGED_IN_USER_DATA"){
        localStorage.setItem("token",payload.token)
        return{
            ...state,
            token:payload.token,
            user:payload.user,
            isSuccessful:true
        }
    }else if(type==="REGISTRATION_ERROR" || type==="LOGIN_ERROR"){
        localStorage.removeItem("token")
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
    }
    return state
}