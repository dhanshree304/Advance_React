
import { Link } from "react-router-dom"






const Navbar=()=>{
    return (
        <div style={{backgroundColor:"lightblue" ,display:"flex",justifyContent:"space-evenly"}}>
       <Link to="/">
        <h2>Home</h2>
      </Link>

      <Link to="/login"><h2>Login</h2></Link>
        
        </div>
        
    )
}

export {Navbar}