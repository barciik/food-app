import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutItem from './CheckoutItem';
import checkout from './Checkout.module.css';
import { cartActions } from '../store';
import { useState, useRef } from 'react';

const Checkout = () => {
	const [isPaypal, setIsPaypal] = useState(false);
	const [isCash, setIsCash] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [data, setData] = useState({})
	const cart = useSelector((state) => state.counter.cart);
	const totalPrice = useSelector((state) => state.counter.totalPrice);
	const dispatch = useDispatch();
	const name = useRef()
	const lastName = useRef()
	const adress = useRef()
	const city = useRef()

	const paypalClasses = `${checkout.paymentItem} ${
		isPaypal ? checkout.focus : ''
	}`;
	const cashClasses = `${checkout.paymentItem} ${isCash ? checkout.focus : ''}`;

	const paypalFocusHandler = () => {
		setIsCash(false);
		setIsPaypal(true);
	};
	const cashFocusHandler = () => {
		setIsPaypal(false);
		setIsCash(true);
	};
	const changeName = () => {

		setData({
			name: name.current.value,
			lastName: lastName.current.value,
			adress: adress.current.value,
			city: city.current.value
		})

	}
	const formSubmitHandler = (event) => {
		event.preventDefault();
		setErrorMessage('');
		let order = {
			paymentMethod: '',
		};
		if (isPaypal) {
			if (cart.length !== 0) {
				order = {
					paymentMethod: 'Paypal',
				};
			} else {
				setErrorMessage('Your cart is empty');
				return;
			}
		} else if (isCash) {
			if (cart.length !== 0) {
				order = {
					paymentMethod: 'Cash',
				};
			} else {
				setErrorMessage('Your cart is empty');
				return;
			}
		} else if (order.paymentMethod === '' && cart.length !== 0) {
			setErrorMessage('Choose payment option!');
			return;
		} else if (order.paymentMethod === '' && cart.length === 0) {
			setErrorMessage('Your cart is empty');
			return
		}
		order.orderInfo = cart;
		order.totalPrice = totalPrice + '$';
		order.name = data.name + ' ' + data.lastName
		order.adress = data.adress + ' | ' + data.city
		console.log(order);
	};

	return (
		<div className={checkout.overlay}>
			<div className={checkout.body}>
				<div className={checkout.orderForm}>
					<p className={checkout.errorMessage}>{errorMessage}</p>
					<div className={checkout.paymentInfo}>
						<div onClick={paypalFocusHandler} className={paypalClasses}>
							Paypal
						</div>
						<div onClick={cashFocusHandler} className={cashClasses}>
							Cash
						</div>
					</div>
					<form className={checkout.form} id='form' onSubmit={formSubmitHandler}>
						<input ref={name} id='name' type='text' placeholder='First name' className={checkout.input} onKeyUp={changeName}></input>
						<input ref={lastName} id='last-name' type='text' placeholder='Last name' className={checkout.input} onKeyUp={changeName}></input>
						<input ref={adress} id='adress' type='text' placeholder='Adress' className={checkout.input} onKeyUp={changeName}></input>
						<input ref={city} id='City' type='text' placeholder='City' className={checkout.input} onKeyUp={changeName}></input>
					</form>
				</div>
				<div className={checkout.orderInfo}>
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
				</div>
				<button form='form' type='submit' className={checkout.order}>
					Order
				</button>
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
