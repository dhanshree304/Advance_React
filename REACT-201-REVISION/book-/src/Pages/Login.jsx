import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location=useLocation()
  
let comingFrom = location.state?.data || "/"

  const handleLogin=(e)=>{
e.preventDefault()
if({email,password}){
    dispatch(login({email,password})).then((r)=>{//as LOGIN FUN RETURNS axios (promise) we can use .then for it
        navigate(comingFrom, {replace:true})//ki promise purn zalyavr mhnje token bhetlyavr he kara.jya page la jaych hot tyala redirect kara.
    })
    
}

  }
  return (
    <div>
        <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br/>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
       <br/>
     <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export { Login };
