import axios from 'axios';


export const fetchAppartments=()=>{
    return async (dispatch) => {
        try {
            const appartments = await axios.get("https://easy-rent-api.herokuapp.com/easy-rent/api/v1/appartment",{method: 'GET',
            headers: {
                'content-type': 'application/json',
            },})

            dispatch(pupulateState(appartments))

            
        } catch (error) {
            console.log(error)
            
        }
    }
}

export const pupulateState=(appartments)=>{
    return{
        type:"FETCH_APPARTMENTS",
        payload:appartments
    }

}


export const fetchFilteredAppartment=(filters)=>{
    return async (dispatch) => {
        try {
            const appartments = await axios.get("https://easy-rent-api.herokuapp.com/easy-rent/api/v1/appartment",{method: 'GET',
            headers: {
                'content-type': 'application/json',
            },})

            dispatch(pupulateState(appartments))

            
        } catch (error) {
            console.log(error)
            
        }
    }
}
