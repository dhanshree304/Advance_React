import {Routes,Route} from "react-router-dom"
import { Home } from "../Pages/Home"
import { Login } from "../Pages/Login"
import { Edit } from "../Pages/Edit"

import { SinglePage } from "../Pages/SinglePage"
import { RequireAuth } from "./RequireAuth"

const AllRoutes=()=>{

    return(
        <Routes> 
             <Route path="/" element={<Home/>}/> 
           
            <Route path="/login" element={<Login/>}/>
            <Route path="/edit/:id" element={<RequireAuth><Edit/></RequireAuth>}/>
            <Route path="/singlePage/:id" element={<RequireAuth><SinglePage/></RequireAuth>}/>
        </Routes>
    )
}
export {AllRoutes}