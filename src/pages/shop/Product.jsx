import React, {useContext} from 'react'
import {ShopContext} from '../../context/shop-context'
function Product({product}) {
    const {addToCart, cartItems} = useContext(ShopContext)

    const cartItemAmount  = cartItems[product.id]
  return (
   
    <div className='product'>
        <img src={product.productImage} alt='shopping-pic'/>
        <div className='description'>
            <p>
                <b>{product.productName}</b>
            </p>
            <p>
                <b>${product.price}</b>
            </p>
            <button className='addToCartBttn' onClick= {() => addToCart(product.id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
    </div>
  )
}

export default Product