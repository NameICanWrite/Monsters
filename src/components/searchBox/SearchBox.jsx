import React from 'react'

import classes from './SearchBox.module.sass'

const SearchBox = ({ onChange, placeholder}) => {
	return (
		<input
			className={classes.search}
			type="search"
			placeholder={placeholder}
			onChange={onChange}
		/>
	)
}

export default SearchBox
