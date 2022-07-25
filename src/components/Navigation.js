import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import nav from './Navigation.module.css';
import NavItem from './NavItem';
import { useEffect } from 'react';

const Navigation = (props) => {
	const [isVisible, setIsVisible] = useState(false);
	const [isAnimated, setIsAnimated] = useState(false);
	const [navClasses, setNavClasses] = useState('light');
	const cart = useSelector((state) => state.counter.cart);
	const totalPrice = useSelector((state) => state.counter.totalPrice);
	const location = useLocation();
	const isEmpty = totalPrice !== 0;

	const checkoutPopUp = () => {
		setIsVisible(!isVisible);
	};
	const checkoutBtnClasses = `${nav.checkoutBtn} ${
		isAnimated ? nav.checkoutAnimation : ''
	}`;

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

	useEffect(() => {
		if (location.pathname === '/') {
			setNavClasses('light');
		} else {
			setNavClasses('dark');
		}
	}, [location]);

	return (
		<div className={nav.body}>
			<NavLink className={nav.link} to='/'>
				Home
			</NavLink>
			<NavLink className={nav.link} to='/menu'>
				Menu
			</NavLink>
			<NavLink className={nav.link} to='/info'>
				Info
			</NavLink>
			<div>
				<button
					onClick={checkoutPopUp}
					className={`${checkoutBtnClasses} ${navClasses}`}
				>
					<img src='./Cart.svg' alt='cart' className={navClasses} />
				</button>
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
						<button className={nav.orderBtn}>Checkout</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navigation;
