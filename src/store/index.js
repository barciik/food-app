import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterReducer = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
		totalPrice: 0,
		checkoutOpen: false,
		isVisible: false,
	},
	reducers: {
		addToCart(state, action) {
			const id = action.payload.name;
			const existingItem = state.cart.find((item) => item.id === id);
			state.totalPrice += action.payload.price;
			if (existingItem) {
				existingItem.quantity++;
				existingItem.price += action.payload.price;
			} else {
				state.cart.push({
					id: action.payload.name,
					name: action.payload.name,
					description: action.payload.description,
					price: action.payload.price,
					quantity: action.payload.quantity,
				});
			}
		},
		removeFromCart(state, action) {
			const id = action.payload;
			const existingItem = state.cart.find((item) => item.id === id);
			if (existingItem.quantity === 1) {
				state.cart = state.cart.filter((item) => item.id !== id);
				state.totalPrice -= existingItem.price;
			} else {
				state.totalPrice =
					state.totalPrice - existingItem.price / existingItem.quantity;
				existingItem.price =
					existingItem.price - existingItem.price / existingItem.quantity;
				existingItem.quantity--;
			}
		},
		openCheckout(state) {
			state.checkoutOpen = true;
			state.isVisible = false;
		},
		closeCheckout(state) {
			state.checkoutOpen = false;
		},
		showCart(state) {
			if (state.checkoutOpen) {
				return;
			}
			state.isVisible = !state.isVisible;
		},
	},
});

export const store = configureStore({
	reducer: {
		counter: counterReducer.reducer,
	},
});

export const cartActions = counterReducer.actions;
