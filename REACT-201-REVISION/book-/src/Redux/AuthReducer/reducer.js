import * as types from "./actionTypes"




const initialState ={
    isAuth:false,
    token:"",
    isAuthLoading:false,
    isErrorLoading:false
}

const reducer =(oldState=initialState,{type,payload})=>{
    switch(type){

        case types.GET_LOGIN_REQUEST:{
            return {...oldState,isAuthLoading:true}
        }
        case types.GET_LOGIN_SUCCESS:{
            return {...oldState,isAuthLoading:false,isAuth:true,token:payload}
        }
        case types.GET_LOGIN_FAILURE:{
            return {...oldState,isAuthLoading:true}
        }
        default:
            return oldState
    }
}

export {reducer}