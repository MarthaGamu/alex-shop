import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

function CartItem(props) {
	const { id, productName, price, productImage } = props.data;
	const { cartItems, removeFromCart, addToCart, updateCartItemCount } =
		useContext(ShopContext);
	return (
		<div className='cartItem' key={id}>
			<img src={productImage} alt='cart' />
			<div className='description'>
				<p>
					{' '}
					<b>{productName}</b>
				</p>
				<p>${price}</p>
				<div className='countHandler'>
					<button onClick={() => addToCart(id)}>+</button>
					<input
						value={cartItems[id]}
						onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
					/>
					<button onClick={() => removeFromCart(id)}>-</button>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
