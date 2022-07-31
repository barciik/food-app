import React from 'react';
import info from './Info.module.css';

const Info = () => {
	return (
		<div className={info.body}>
			<h3 className={info.link}>
				<span>Source code: </span>
				<a
					href='https://github.com/barciik/food-app/tree/master'
					target='_blank'
					rel='noreferrer'
				>
					click
				</a>
			</h3>
			<h3 className={info.link}>
				<span>Linkedin: </span>
				<a
					href='https://www.linkedin.com/in/bartłomiej-batko-518bb0226'
					target='_blank'
					rel='noreferrer'
				>
					click
				</a>
			</h3>
			<h3 className={info.link}>
				<span>My website: </span>
				<a href='/' target='_blank' rel='noreferrer'>
					click
				</a>
			</h3>
		</div>
	);
};

export default Info;
