import React from 'react';
import home from './Home.module.css';

const Home = () => {
	return (
		<div className={home.body}>
			<div className={home.shadow}>
				<h1 className={home.welcome}>Welcome to our restaurant!</h1>
			</div>
		</div>
	);
};

export default Home;
