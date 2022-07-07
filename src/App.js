import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Home from './pages/Home.js';
import './App.css';
import Menu from './pages/Menu.js';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/menu' exact>
					<Menu />
				</Route>
				<Route></Route>
				<Suspense></Suspense>
			</Switch>
		</div>
	);
}

export default App;
