import React from 'react';
import home from './Home.module.css';

const Home = () => {
	return (
		<div className={home.body}>
			<h1 className={home.welcome}>Welcome to our restaurant!</h1>
		</div>
	);
};

export default Home;
