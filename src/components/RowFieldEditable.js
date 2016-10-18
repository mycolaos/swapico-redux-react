import React from 'react'

const RowFieldEditable = ({ prop, onChange, value }) => (
	<tr className='row'>
		<td><strong>{prop}</strong></td>
		<td>
			<input
				class='input'
				value={ value }
				onChange={ e => onChange(e.target.value) } />
		</td>
	</tr>
)

export default RowFieldEditable