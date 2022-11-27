import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return (
		robots.map(robot => {
			return (<Card key = {robot.id} id = {robot.id} name = {robot.name} email = {robot.email} username = {robot.username} />)
		})
	);
};

export default CardList;