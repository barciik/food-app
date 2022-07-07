import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import nav from './Navigation.module.css';
import NavItem from './NavItem';

const Navigation = (props) => {
	const [isVisible, setIsVisible] = useState(false);
	const cart = useSelector((state) => state.counter.cart);
	const itemAdded = useSelector((state) => state.counter.itemAdded);
	const totalPrice = useSelector((state) => state.counter.totalPrice);
	const isEmpty = totalPrice !== 0;

	const checkoutPopUp = () => {
		setIsVisible(!isVisible);
	};
	const checkoutBtnClasses = `${nav.checkoutBtn} checkoutAnimation`;
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
				<button onClick={checkoutPopUp} className={checkoutBtnClasses}>
					<img src='./shopping-cart.svg' alt='cart' />
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
