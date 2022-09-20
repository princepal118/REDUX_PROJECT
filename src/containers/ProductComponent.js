import React from 'react'
import { useSelector } from 'react-redux'
import './productLayout.css'

const ProductComponent = () => {
  // console.log('ProductComponent ============', products.allProducts.products[0])
  const products = useSelector((state) => state.allProducts.products) 
  
  console.log('products =******=======', products)

  const renderList = products.map((product) => {
    const {id,title,price, category, image} = product
    return (
      <div className=' prodctsLayout' key={id}>
        <div className='ui link cards ' >
          <div className='card'>
            <div className='image'>
              <img src={image} alt={title}/>
            </div>
            <div className='content'>
              <div className='header'>{title}</div>
              <div className='meta price'>$ {price}</div>
              <div className='meta '>{category}</div> 
            </div>
          </div>
        </div> 
      </div> 
    )
  })

  return (
    <>{ renderList}</>
    
  )
}

export default ProductComponent
 