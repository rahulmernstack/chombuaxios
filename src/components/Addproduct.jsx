import React, { useState } from 'react'
import axiosInstance from "../helpers/axiosInstance"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {

  let navigate = useNavigate();
  let [productData , setProductData] = useState({
      pname : "" , 
      pprice : "" , 
      pqty : "" , 
      pimg : ""
  })




  let data = (e) => {
      setProductData({ ...productData, [e.target.name]: e.target.value })
  }

  let handleSubmit = (e)=>{
    e.preventDefault() ;
    let payload = productData ;
   
    axiosInstance.post("/products" , payload)
    toast.success("ADDED ITEM ")
    navigate("/viewproduct")


  }
  return (
    <div className='form-holder' onSubmit={handleSubmit}>
      <form action="">
        <h1>ADD PRODUCT!!</h1>
        <br />
        <hr />
        <div className="form-items">
              <label >PRODUCT NAME </label>
              <input type="text" name='pname' onChange={data}/>
        </div>
          <div className="form-items">
              <label >PRODUCT PRICE </label>
              <input type="text" name='pprice' onChange={data}/>
        </div>
        <div className="form-items">
              <label >PRODUCT QTY </label>
              <input type="text" name='pqty' onChange={data}/>
        </div>
         
        <div className='btn'>
            <button>ADD TO CART</button>
        </div>
      </form>
    </div>
  )
}

export default Addproduct