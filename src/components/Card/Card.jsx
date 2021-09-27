import React from 'react'
import classes from './Card.module.sass'
function Card({monster}) {
	return (
		<div className={classes.card}>
			<img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}  />
			<h3>{monster.name}</h3>
			<p>{monster.email}</p>
		</div>
	)
}

export default Card
