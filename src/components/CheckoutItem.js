import React from 'react';

const CheckoutItem = (props) => {
	return (
		<div>
			<p>
				{props.name} x{props.quantity} - {props.price}$
			</p>
		</div>
	);
};

export default CheckoutItem;
