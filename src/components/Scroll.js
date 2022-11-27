import React from 'react';

const Scroll = (props) => {
	// console.log(props.children.props.robots)
	return props.children.props.robots.length ?
	(
		<div className = "dib tc" style = {{overflowY : 'scroll', border : '2px solid black', width : '75%', height : '550px'}}>
			{props.children}
		</div>
	) :
	<p className = "tc">No RoboFriends found. Try changing search term.</p>
}

export default Scroll