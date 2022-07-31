import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutItem from './CheckoutItem';
import checkout from './Checkout.module.css';
import { cartActions } from '../store';

const Checkout = () => {
	const cart = useSelector((state) => state.counter.cart);
	const totalPrice = useSelector((state) => state.counter.totalPrice);
	const dispatch = useDispatch();

	return (
		<div className={checkout.noScroll}>
			<div className={checkout.body}>
				<h3>Your order: </h3>
				{cart.map((item) => {
					return (
						<CheckoutItem
							key={item.name}
							name={item.name}
							quantity={item.quantity}
							price={item.price}
							totalPrice={totalPrice}
						/>
					);
				})}
				<h4>Total: {totalPrice}$</h4>
				<button className={checkout.order}>Order</button>
			</div>
			<div
				className={checkout.shadow}
				onClick={() => {
					dispatch(cartActions.closeCheckout());
				}}
			></div>
		</div>
	);
};

export default Checkout;
