import '../signup/signup.css'
import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const UpdateProduct = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = useState({
        name: '',
        price: '',
        company: '',
        category: ''
    })

    async function getProductDetails(id){
        let result = await fetch(`https://e-dashboard-backend-otm3.onrender.com/product/${id}`)
        // let result = await fetch(`/product/${id}`)
        result = await result.json();
        // console.log(result);
        setProduct(result);
    }

    useEffect(() => {
        getProductDetails(id);
    }, [])

    async function updateProduct(id){
        // console.log(product);
        // let result = await fetch(`http://localhost:5000/product/${id}`,{
        let result = await fetch(`https://e-dashboard-backend-otm3.onrender.com/product/${id}`,{
        // let result = await fetch(`/product/${id}`,{
            method: "Put",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json();
        console.log(result);
        navigate('/')
    }
  return (
    <div className='signup'>
        <div className="signupWrapper">
            <h1>Update Product</h1>
            <input className='inputBox' value={product.name} type="text" placeholder='Enter Product Name' onChange={(e) => setProduct({...product, name: e.target.value})}/>
            <input className='inputBox' value={product.price} type="number" placeholder='Enter Price' onChange={(e) => setProduct({...product, price: e.target.value})}/>
            <input className='inputBox' value={product.company} type="text" placeholder='Enter Company Name' onChange={(e) => setProduct({...product, company: e.target.value})}/>
            <input className='inputBox' value={product.category} type="text" placeholder='Enter Product Category'  onChange={(e) => setProduct({...product, category: e.target.value})}/>
            <button className='btn' onClick={() => updateProduct(id)}>Update Product</button>
        </div>
    </div>
  )
}

export default UpdateProduct