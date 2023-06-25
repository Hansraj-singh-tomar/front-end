import './productList.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    async function fetchData(){
        // let result = await fetch("http://localhost:5000/products");
        let result = await fetch("https://e-dashboard-backend-otm3.onrender.com/products");
        // let result = await fetch("/products");
        result = await result.json();
        // console.log(result);
        setProducts(result)
    }

    useEffect(() => {
        fetchData();
    },[])

    async function deleteProduct(id){
        let result = await fetch(`https://e-dashboard-backend-otm3.onrender.com/product/${id}`, {
        // let result = await fetch(`/product/${id}`, {
            method: "delete",
        }) 
        result = await result.json();  
        console.log(result);
        if(result){
            fetchData();  
        } 
    }

    async function searchHandle(e){
        let key = e.target.value;
        if(key){

            let result = await fetch(`https://e-dashboard-backend-otm3.onrender.com/search/${key}`)
            result = await result.json()
            if(result){
                setProducts(result);
            }
        }else{
            fetchData();
        }
    }

  return (
    <div className="productList">
        
        <div className="top">
            <h2>Products List</h2>
            <input onChange={searchHandle} className='inputBox2' type="text" placeholder="Search Product Here ..."/>
        </div>

        <hr />
        
        <div className="listContainer">
            <table>
                <thead>
                        <tr>
                            <td className='tableHead'>S.N.</td>
                            <td className='tableHead'>Product Name</td>
                            <td className='tableHead'>Price</td>
                            <td className='tableHead'>Company</td>
                            <td className='tableHead'>Category</td>
                            <td className='tableHead'>Operations</td>
                        </tr>
                        
                </thead>
                <tbody>
                    {
                        products.length > 0 ? products.map((item, i) => {
                            return(
                                <>
                                    <tr key={i}>
                                        <td className='tableBody'>{i+1}</td>
                                        <td className='tableBody'>{item.name}</td>
                                        <td className='tableBody'>{item.price}</td>
                                        <td className='tableBody'>{item.company}</td>
                                        <td className='tableBody'>{item.category}</td>
                                        <td className='tableBody'>
                                            <button onClick={() => deleteProduct(item._id)} className='btn2'>Delete</button>
                                            <button onClick={() => navigate(`/update/${item._id}`)} className='btn2'>Update</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                        : <h4>No Result Found</h4>
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProductList