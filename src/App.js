import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Home from './pages/Home.js';
import Info from './pages/Info.js';
import Menu from './pages/Menu.js';

function App() {
	return (
		<div className='App'>
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
