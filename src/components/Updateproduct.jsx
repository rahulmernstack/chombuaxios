import React, { useState , useEffect } from 'react'
import axiosInstance from "../helpers/axiosInstance"
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

const Updateproduct = () => {

  let {id} = useParams()  ; 
  let navigate = useNavigate();
  let [productData , setProductData] = useState({
      pname : "" , 
      pprice : "" , 
      pqty : "" , 
      pimg : ""
  })

  let {pname , pprice , pqty , pimg} = productData ; 

  let data = (e) => {
      setProductData({ ...productData, [e.target.name]: e.target.value })
  }

  let handleSubmit = (e)=>{
    e.preventDefault() ;
    let payload = productData ;
   
    axiosInstance.put(`/products/${id}` , payload)
    toast.warning("UPDATED ITEM ")
    navigate("/viewproduct")

  }

     useEffect(()=>{
        let fetchData = async()=>
        {
            let {data} = await  axiosInstance.get(`/products/${id}`)
            setProductData(data)
        } 
            fetchData()
        },[])

  return (
    <div className='form-holder' onSubmit={handleSubmit}>
      <form action="">
        <h1>UPDATE PRODUCT!!</h1>
        <br />
        <hr />
        <div className="form-items">
              <label >PRODUCT NAME </label>
              <input type="text" name='pname' value={pname} onChange={data}/>
        </div>
          <div className="form-items">
              <label >PRODUCT PRICE </label>
              <input type="text" name='pprice' value={pprice} onChange={data}/>
        </div>
        <div className="form-items">
              <label >PRODUCT QTY </label>
              <input type="text" name='pqty' value={pqty} onChange={data}/>
        </div>
           
        <div className='btn'>
            <button onClick={handleSubmit}>UPDATE</button>
        </div>
      </form>
    </div>
  )
}

export default Updateproduct