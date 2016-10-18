import React from 'react'

const RowField = ({ prop, value }) => (
	<tr className='row'>
		<td><strong>{prop}</strong></td>
		<td><span>{value}</span></td>
	</tr>
)

export default RowField