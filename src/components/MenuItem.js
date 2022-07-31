import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store';
import menuItem from './MenuItem.module.css';

const MenuItem = (props) => {
	const dispatch = useDispatch();

	const addToCart = () => {
		dispatch(cartActions.addToCart(props));
		// dispatch(cartActions.addAnimaiton());
		// dispatch(cartActions.removeAnimaiton());
	};

	return (
		<div className={menuItem.body}>
			<img className={menuItem.img} src={props.img} alt={props.name} />
			<h2 className={menuItem.name}>{props.name}</h2>
			<p className={menuItem.desc}>{props.description}</p>
			{/* <p className={menuItem.price}>{props.price}</p> */}
			<button onClick={addToCart} className={menuItem.price}>
				{`${props.price}$`}
			</button>
		</div>
	);
};

export default MenuItem;
