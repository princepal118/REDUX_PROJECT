import React from 'react'

import {useSelector} from 'react-redux'

const  ProductListing=()=> {
    // we are going to fetch the product that which are in redux Store 
    const products = useSelector((state)=> state)
    console.log('products ===', products)

  return (
      <div className='ui grid container'>
          <div  style={{ marginTop: 20 }}>
              <h1>productListing </h1>
           </div>
    </div>
  )
}

export default ProductListing
