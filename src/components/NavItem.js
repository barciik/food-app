import React from 'react';
import navItem from './NavItem.module.css';
import { cartActions } from '../store';
import { useDispatch } from 'react-redux/es/exports';

const NavItem = (props) => {
	const dispatch = useDispatch();

	const removeFromCart = () => {
        dispatch(cartActions.removeFromCart(props.name))
    };

	return (
		<div className={navItem.body}>
			<h4>{`${props.name} x${props.quantity}`}</h4>
			<p>{`${props.price}$`}</p>
			<button onClick={removeFromCart}>-</button>
		</div>
	);
};

export default NavItem;
