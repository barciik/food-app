import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout.js';
import Navigation from './components/Navigation.js';
import Home from './pages/Home.js';
import Info from './pages/Info.js';
import Menu from './pages/Menu.js';

function App() {
	const checkoutOpen = useSelector((state) => state.counter.checkoutOpen);

	return (
		<div className='App'>
			{checkoutOpen && <Checkout />}
			<Navigation />
			<Switch>
				<Route path='/food-app/' exact>
					<Home />
				</Route>
				<Route path='/food-app/menu' exact>
					<Menu />
				</Route>
				<Route path='/food-app/info'>
					<Info />
				</Route>
				<Suspense></Suspense>
			</Switch>
		</div>
	);
}

export default App;
