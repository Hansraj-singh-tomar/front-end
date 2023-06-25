import '../signup/signup.css'

import {useState} from 'react';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        category: '',
        company: ''
    })
    const [error, setError] = useState(false);

    
    async function handleSubmit(){
        // console.log(product); // {name: 'm-10', price: '10000', category: 'mobile', company: 'samsung'}
        // const {name, price, category, company} = product;
        
        if(!product.name || !product.category || !product.company || !product.price){
            setError(true);
            return false;
        }

        const userId = JSON.parse(localStorage.getItem("user"))._id;
        
        product.userId = userId;
        console.log(product);

        // let result = await fetch('http://localhost:5000/add-product', {
        let result = await fetch('https://e-dashboard-backend-otm3.onrender.com/add-product', {
        // let result = await fetch('/add-product', {
            method: "post",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': "application/json"
            }
        })
        result = await result.json();
        console.log(result);
        if(result){
          alert("Product has been added");
        }
    }
  return (
    <div className='signup'>
        <div className="signupWrapper">
            <h1>Add Product</h1>
            
            <input className='inputBox' value={product.name} type="text" placeholder='Enter Product Name'  onChange={(e) => setProduct({...product, name: e.target.value})}/>
            {error && !product.name && <span>Enter Valid Name</span>}
            
            <input className='inputBox' value={product.price} type="number" placeholder='Enter Price' onChange={(e) => setProduct({...product, price: e.target.value})}/>
            {error && !product.price && <span>Enter Valid Price</span>}
            
            <input className='inputBox' value={product.company} type="text" placeholder='Enter Company Name' onChange={(e) => setProduct({...product, company: e.target.value})}/>
            {error && !product.company && <span>Enter Valid Company Name</span>}
            
            <input className='inputBox' value={product.category} type="text" placeholder='Enter Product Category' onChange={(e) => setProduct({...product, category: e.target.value})}/>
            {error && !product.category && <span>Enter Valid Category</span>}
            
            <button className='btn' onClick={handleSubmit}>Add Product</button>
        </div>
    </div>
  )
}

export default AddProduct