import './nav.css'

import {NavLink, useNavigate} from 'react-router-dom';

const Nav = () => {

    const auth = localStorage.getItem("user")

    const navigate = useNavigate();
    
    function logout(){
      console.log("logout successfull");
      localStorage.clear();
      navigate("/signup");
    }

  return (
    <div className="topbar">
        <div className='topbarWrapper'>
            <img src='/src/assets/logo.png' alt='logo'/>
            <h1 className='logoHeading'>E-Dashboard</h1>
        {
            auth ? 
            <div className='left'>
                <ul>
                    <li><NavLink to="/">Products</NavLink></li>
                    <li><NavLink to="/add">Add Product</NavLink></li>
                    {/* <li><NavLink to="/update">Update Product</NavLink></li> */}
                    {/* <li><NavLink to="/profile">Profile</NavLink></li> */}
                    <li><NavLink onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</NavLink></li>
                </ul>
            </div>
            :
            <div className='right'>
                <ul>
                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>    
            </div>
        }
        </div> 
    </div>
  )
}

export default Nav