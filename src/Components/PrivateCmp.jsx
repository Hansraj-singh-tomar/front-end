import {Outlet, Navigate} from 'react-router-dom'

// outlet - jo ham props ke through component ko send karenge to outlet usse handle karega 

const PrivateCmp = () => {
    const auth = localStorage.getItem("user");
    return auth ? <Outlet /> : <Navigate to="/signup" />
}

export default PrivateCmp;