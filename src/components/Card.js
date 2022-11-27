import React from 'react'

const Card = ({id,name,username,email}) => {
	return (
		<div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt='robot_image' src = {`https://robohash.org/${username}?size=175x175`} />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}

export default Card