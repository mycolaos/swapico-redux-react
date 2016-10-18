import React from 'react'
import RowFieldEditable from '../components/RowFieldEditable'

let SimpleItem = ({ data, save, fields }) => {
	fields = fields || []
	return (
	<table className='table editable-item'>
		<tbody>
			{ fields.map(field => 
				<RowFieldEditable 
					key={field}  
					prop={field} 
					value={ (data.get(field) || '') }
					onChange={ value => save(data.get('id'), {[field]: value}) } /> 
			)}
		</tbody>
	</table>
)}

export default SimpleItem