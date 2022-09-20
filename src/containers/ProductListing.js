import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productActions'
import ProductComponent from './ProductComponent'

const  ProductListing=()=> {
    // we are going to fetch the product that which are in redux Store 
    const products = useSelector((state)=> state)
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products').catch((error) => {
      console.log('error', error)
    })

    // setProducts
    dispatch(setProducts( response.data))
    
  }

  console.log("apiFetch Data ",products)


  useEffect(() => {
    fetchProducts()
  },[])

  return (
      <div className='ui grid container' style={{marginTop:30}}>
          {/* <div  style={{ marginTop: 20 }}> */}
        <ProductComponent products={products} />
           {/* </div> */}
    </div>
  )
}

export default ProductListing
