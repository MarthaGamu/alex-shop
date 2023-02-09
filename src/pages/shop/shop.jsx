import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './Product'
import './shop.css'
function Shop() {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>ALEX SHOP</h1>
        </div>
     <div className='products'>
        {PRODUCTS.map((product) => {
            return <Product product={product} key={product.id}/>
        })}
     </div>
    </div>
  )
}

export default Shop
