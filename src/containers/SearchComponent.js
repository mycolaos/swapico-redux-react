import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search, selectEndpoint } from '../actions/queryActions'
import { endpoints } from '../constants/Api'
import { fields } from '../constants/Fields'
import List from '../components/List'
import QueryBar from '../components/QueryBar'
import QueryItem from './QueryItem'

let SearchComponent = ({ endpoints, items, fields, search, selectEndpoint }) => {	
	return (
    <div className='component search-component'>
      <QueryBar
        endpoints={ endpoints }
        search={ search }
        selectEndpoint={ selectEndpoint } />
      <List 
        items={ items }
        renderItem={ data => <QueryItem key={ data.get('id') } data={ data } fields={ fields } /> }  />
    </div>
)}

const mapStateToProps = (state) => {
  let queryState = state.get('query'),
      selectedFields = fields[state.get('query').get('endpoint')];

      console.log('query items', queryState.get('items'), 'selected', selectedFields)
	return {
		endpoints: Object.keys(endpoints).map(key => endpoints[key]),
		items: queryState.get('items'),
    fields: selectedFields || []
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		search: bindActionCreators(search, dispatch),
    selectEndpoint: bindActionCreators(selectEndpoint, dispatch)
	}
}

SearchComponent = connect(mapStateToProps, mapDispatchToProps)(SearchComponent);

export default SearchComponent