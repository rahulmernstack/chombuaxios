import React, { useEffect, useState } from 'react'
import axiosInstance from "../helpers/axiosInstance"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Viewproduct = () => {

let [products , setProducts] = useState([])

  let navigate = useNavigate(); 

  useEffect(()=>{
      let fetchData = async()=>{
           let {data} = await  axiosInstance.get("/products")
           setProducts(data)
      } 
      fetchData()
  },[])

  let handleDelete = (id)=>{
      axiosInstance.delete(`/products/${id}`)
    
      toast.error("Item Removed")
        navigate("/")
    
  }

  return (
    <div className='product-container'>
      {products.map((x)=>{
          return(
              <div className="cards">
                <img style={{height:"100px" , width:"100px"}} src={`https://api.dicebear.com/9.x/personas/svg?seed=${x.id}`} alt="" />
                <h1>Product Name : <span>{x.pname}</span> </h1>
                <h2>Product Price : <span>{x.pprice}</span> </h2>
                <h2>Product Quantity : <span>{x.pqty}</span> </h2>
                <button>
                  <Link to={`/updateproduct/${x.id}`}>UPDATE</Link>
                </button>
                <button onClick={()=>{
                  handleDelete(x.id)
                }}>DELETE</button>
              </div>
          )
      })}
    </div>
  )
}

export default Viewproduct