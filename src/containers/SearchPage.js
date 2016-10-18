import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { fields } from '../constants/Fields'
import List from '../components/List'
import SimpleItem from '../components/SimpleItem'
import SearchComponent from './SearchComponent'

let SearchPage = ({ savedItems, fields }) => {
	return (
		<section className='page search-page'>
			<SearchComponent />
			<List
				items={ savedItems }
				renderItem={ data => <SimpleItem key={ data.get('id') } data={ data } fields={ fields } /> } />
		</section>
)}

const mapStateToProps = (state) => {
	let endpoint = state.get('query').get('endpoint'),
		selectedFields = fields[endpoint],
		items = state.getIn([endpoint, 'items']);
  return {
    savedItems: items || Immutable.Map(),
    fields: selectedFields || []
  }
}

SearchPage = connect(mapStateToProps)(SearchPage);

export default SearchPage