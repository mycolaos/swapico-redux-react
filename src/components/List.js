import React from 'react'

const List = ({ items, renderItem }) => {
	return (
	<div className='list-container'>
		{ items.toList().map(item => 
				renderItem(item)
		)}
	</div>
)}

export default List