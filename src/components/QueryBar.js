import React from 'react'

const QueryBar = ({ endpoints, selectEndpoint, search }) => {
	let input, select

	return (
		<div className='component querybar-component'>
			<select
				className='select'
				ref={ node => { select=node } }
				onChange={ () => selectEndpoint(select.value) }>
				<option></option>
				{endpoints.map( end => 
				<option key={ end } value={ end }>{ end }</option> )}
			</select>
			<input 
				className='input search-input' 
				ref={ node => { input=node } }
				onKeyUp={ e => e.keyCode !== 13 || search(input.value, select.value) }
				placeholder='Search' />
			<button
				className='btn'
				onClick={ () => search(input.value, select.value) }>
					Search
			</button>
		</div>
	)}

export default QueryBar