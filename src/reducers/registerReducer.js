const initialState={token:"",user:{}, registrationSuccessful:false}

export const registerReducer=(state=initialState,actions)=>{
    const {type,payload} = actions
    console.log(type)
    console.log(payload)

    if(type==="USER_REGISTRATION"){
        return{
            ...state,
            token:payload.token,
            user:payload.user,
            registrationSuccessful:true
        }
    }
    return state
}