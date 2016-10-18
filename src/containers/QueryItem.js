import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as queryActions from '../actions/queryActions'
import SimpleItem from '../components/SimpleItem'

let QueryItem = ({ data, fields, save }) => (
	<div className='query-item'>
		<SimpleItem data={ data } fields={ fields } />
		<div className='action-btns'>
			<button 
				className='btn'
				onClick={ () => save(data.get('id')) } >
				Save
			</button>
		</div>
	</div>
)

const mapDispatchToProps = (dispatch) => {
  return {
    save: bindActionCreators(queryActions.saveLocal, dispatch)
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	return Object.assign({}, dispatchProps, ownProps)
}

QueryItem = connect(null, mapDispatchToProps, mergeProps)(QueryItem);

export default QueryItem