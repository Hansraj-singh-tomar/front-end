import './signup.css'

import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  
  useEffect(() => {
      const auth = localStorage.getItem("user");
      if(auth){
          navigate("/")
      }
  })
  

  async function handleSubmit(){
      console.log(name, email, password);
      let data = {name, email, password};

    //   let result = await fetch("http://localhost:5000/register", {
      let result = await fetch("https://e-dashboard-backend-otm3.onrender.com/register", {
    //   let result = await fetch("/register", {
          method: "post",
          body: JSON.stringify(data),
          headers: {
              "Content-Type": "application/json",
          }
      })
      result = await result.json();
      console.log(result);
      if(result){
          localStorage.setItem("user", JSON.stringify(result))
          navigate('/');
      }
  }

  return (
    <div className='signup'>
        <div className="signupWrapper">
            <h1>Register User</h1>
            <input className='inputBox' value={name} type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)}/>
            <input className='inputBox' value={email} type="text" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)}/>
            <input className='inputBox' value={password} type="number" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSubmit} className='btn'>Submit</button>
        </div>
    </div>
  )
}

export default Signup