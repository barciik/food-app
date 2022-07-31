import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import nav from './Navigation.module.css';
import NavItem from './NavItem';
import { useEffect } from 'react';
import { cartActions } from '../store';

const Navigation = (props) => {
	// const [isVisible, setIsVisible] = useState(false);
	const [isAnimated, setIsAnimated] = useState(false);
	const [isHome, setisHome] = useState();
	const cart = useSelector((state) => state.counter.cart);
	const totalPrice = useSelector((state) => state.counter.totalPrice);
	const isVisible = useSelector((state) => state.counter.isVisible);
	const isEmpty = totalPrice !== 0;
	const location = useLocation();
	const dispatch = useDispatch();

	const checkoutPopUp = () => {
		dispatch(cartActions.showCart());
	};
	const checkoutBtnClasses = `${nav.checkoutBtn} ${
		isAnimated ? nav.checkoutAnimation : ''
	}`;
	const checkoutBtnClassesWhite = `${nav.checkoutBtnWhite} ${
		isAnimated ? nav.checkoutAnimation : ''
	}`;

	useEffect(() => {
		if (location.pathname === '/food-app/') {
			setisHome(true);
		} else {
			setisHome(false);
		}
	}, [location.pathname]);

	useEffect(() => {
		if (cart.length === 0) {
			return;
		}
		setIsAnimated(true);

		const timer = setTimeout(() => {
			setIsAnimated(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [cart]);

	return (
		<div className={nav.body}>
			<NavLink className={nav.link} to='/food-app/'>
				Home
			</NavLink>
			<NavLink className={nav.link} to='/food-app/menu'>
				Menu
			</NavLink>
			<NavLink className={nav.link} to='/food-app/info'>
				Info
			</NavLink>
			<div>
				{isHome ? (
					<button onClick={checkoutPopUp} className={checkoutBtnClassesWhite}>
						<img src='Cart-white.svg' alt='cart' />
					</button>
				) : (
					<button onClick={checkoutPopUp} className={checkoutBtnClasses}>
						<img src='Cart.svg' alt='cart' />
					</button>
				)}
				{isVisible && (
					<div className={nav.checkoutBody}>
						{cart.map((item) => {
							return (
								<NavItem
									name={item.name}
									price={item.price}
									key={item.name}
									quantity={item.quantity}
								/>
							);
						})}
						{!isEmpty && <h3 className={nav.totalPrice}>Your cart is empty</h3>}
						<p className={nav.totalPrice}>{`Total: ${totalPrice}$`}</p>
						<button
							className={nav.orderBtn}
							onClick={() => {
								dispatch(cartActions.openCheckout());
							}}
						>
							Checkout
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navigation;
