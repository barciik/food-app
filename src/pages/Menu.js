import React from 'react';
import MenuItem from '../components/MenuItem.js';
import menu from './Menu.module.css';

const Items = [
	{
		name: 'Burger',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, repellat.',
		price: 13.5,
		img: 'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg',
	},
	{
		name: 'Pizza',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, repellat.',
		price: 12,
		img: 'https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183_1280.jpg',
	},
	{
		name: 'Pancakes',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, repellat.',
		price: 7.5,
		img: 'https://cdn.pixabay.com/photo/2017/01/30/13/56/pancakes-2020870_1280.jpg',
	},
	{
		name: 'Sushi',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, repellat.',
		price: 14,
		img: 'https://cdn.pixabay.com/photo/2016/11/25/16/08/sushi-1858696_1280.jpg',
	},
	{
		name: 'Pasta',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, repellat.',
		price: 10,
		img: 'https://cdn.pixabay.com/photo/2017/06/27/08/41/gourmet-2446701_1280.jpg',
	},
	{
		name: 'French toast',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, repellat.',
		price: 3.5,
		img: 'https://cdn.pixabay.com/photo/2018/06/02/12/50/breakfast-3448330_1280.jpg',
	},
	{
		name: 'Chicken wings',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, repellat.',
		price: 12,
		img: 'https://cdn.pixabay.com/photo/2016/07/31/18/00/chicken-1559579_1280.jpg',
	},
	{
		name: 'Fries',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, repellat.',
		price: 5,
		img: 'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg',
	},
];

const Menu = () => {
	return (
		<div className={menu.body}>
			{Items.map((item) => {
				return (
					<MenuItem
						quantity={1}
						key={item.name}
						name={item.name}
						description={item.description}
						price={item.price}
						img={item.img}
					/>
				);
			})}
		</div>
	);
};

export default Menu;
