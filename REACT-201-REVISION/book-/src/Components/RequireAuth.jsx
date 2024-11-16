import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"



const RequireAuth=({children})=>{

    const isAuth = useSelector((state)=>state.AuthReducer.isAuth)
const location=useLocation()

if(!isAuth){
   return  <Navigate to="/login" replace state={{data:location.pathname}}/>//jya rerSuth chya children cha address ithe store hoto
   //to address aapn login page mde retrieve krto aani login kelyavr brobr tya page la redirect krto.

}


    return children
}
export {RequireAuth}