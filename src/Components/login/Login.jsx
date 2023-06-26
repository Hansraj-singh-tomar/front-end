import '../signup/signup.css'
import {useState, useEffect} from 'react';

import {useNavigate} from "react-router-dom";
 
const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user")
    if(auth){
      navigate("/");
    }
  })

  async function handleSubmit(){

    if(!email || !password){
      setError(true);
      return false;
    }
    // console.log(email, password);
    let data = {email, password}
    // let result = await fetch("http://localhost:5000/login", {
    // let result = await fetch("/login", {
    
    let result = await fetch("https://e-dashboard-backend-otm3.onrender.com/login", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': "application/json"
      }
    });
    result = await result.json();
    // console.log(result);
    if(result){
      localStorage.setItem("user", JSON.stringify(result))
      navigate("/");
    }else{
      alert("user not found");
    }
  }

  return (
    <div className='signup'>
        <div className="signupWrapper">
            <h1>Login User</h1>
            
            <input className='inputBox' value={email} type="text" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} required/>
            {error && !email && <span>Enter Valid Email</span>}

            <input className='inputBox' value={password} type="number" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} required/>
            {error && !password && <span>Enter Valid Password</span>}

            <button className='btn' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Login