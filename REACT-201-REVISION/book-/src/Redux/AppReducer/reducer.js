


import * as types from "./actionTypes";

const initState={
    isLoading:false,
    data:[],
    isError:false
}

const reducer=(oldState=initState,{type,payload})=>{
    switch(type){
case types.GET_BOOKS_REQUEST:{
    return {
        ...oldState,isLoading:true
    }
}

case types.GET_BOOKS_SUCCESS:{
    return {
        ...oldState,isLoading:false,data:payload
    }
}

case types.GET_BOOKS_FAILURE:{
    return {
        ...oldState,data:[],isError:true
    }
}





        default:
            return oldState;
    }
    
    
}

export {reducer}

