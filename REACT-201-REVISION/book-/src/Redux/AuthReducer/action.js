
import * as types from "./actionTypes"
import axios from "axios"

const login =(payload)=>(dispatch)=>{
   dispatch({type:types.GET_LOGIN_REQUEST})
   return axios
   .post("https://reqres.in/api/login",payload)
   .then((r)=>{
    return dispatch({type:types.GET_LOGIN_SUCCESS,payload:r.data.token})
   })
   .catch((e)=>{
    dispatch({type:types.GET_LOGIN_FAILURE,payload:e})
   })

}
export {login}

