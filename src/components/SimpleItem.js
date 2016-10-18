import React from 'react'
import RowField from '../components/RowField'

let SimpleItem = ({ data, fields }) => {
	fields = fields || []
	return (
	<table className='table simple-item'>
		<tbody>
			{ fields.map(field => 
				<RowField key={field} prop={field} value={ (data.get(field) || '') } /> 
			)}
		</tbody>
	</table>
)}

export default SimpleItem