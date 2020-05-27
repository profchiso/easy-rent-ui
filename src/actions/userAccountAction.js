export const register =(userData)=>{
    return{
        type:"USER_REGISTRATION",
        payload:userData
    }
}

export const login =(userData)=>{
    return{
        type:"USER_LOGIN",
        payload:userData
    }
}