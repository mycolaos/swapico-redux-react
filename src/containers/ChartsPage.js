import React from 'react'
import { connect } from 'react-redux'

let ChartsPage = ({ items }) => {
	return (
		<section className='page charts-page'>
			<h1>Should be cool chart</h1>
			<table>
				<thead>
					<tr><th>Name</th><th>BBY</th></tr>
				</thead>
				<tbody>
					{
						items.map(item => 
							<tr key={ item.id } >
								<td><span>{ item.name }</span></td>
								<td style={{ textAlign: 'center' }}>
									<i>{ item.birth_year }</i>
									<hr width={ item.birth_year } />
								</td>
							</tr>
						)
					}
				</tbody>
			</table>
		</section>
)}

const mapStateToProps = (state) => {
	let items = state.getIn(['people', 'items']).toList().toJS();
	items.forEach(item => item.birth_year = item.birth_year.toLowerCase().replace('bby', ''));
	console.log(items)
  return {
    items
  }
}

ChartsPage = connect(mapStateToProps)(ChartsPage);

export default ChartsPage