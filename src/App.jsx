import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"

import PrivateCmp from './Components/PrivateCmp'

import Nav from "./Components/nav/Nav"
import ProductList from './Components/product list/ProductList'
import AddProduct from './Components/addProduct/AddProduct'
import UpdateProduct from './Components/update product/UpdateProduct'
import Footer from './Components/footer/Footer'

import Signup from './Components/signup/Signup'
import Login from './Components/login/Login'


const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateCmp/>}>
              <Route path="/" element={<ProductList/>}/>
              <Route path="/add" element={<AddProduct/>}/>
              <Route path="/update/:id" element={<UpdateProduct/>}/>
              <Route path="/logout" element={<h1>Logout Page</h1>}/>
              <Route path="/profile" element={<h1>Profile page.</h1>}/>
          </Route>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App