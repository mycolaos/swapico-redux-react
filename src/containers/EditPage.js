import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable from 'immutable'
import * as peopleActions from '../actions/peopleActions'
import { fields } from '../constants/Fields'
import List from '../components/List'
import EditableItem from '../components/EditableItem'

let EditPage = ({ create, update, remove, select, selectedItem, items, fields }) => {
	return (
		<section className='page edit-page'>
			<div>
				<button 
					className='btn'
					onClick={ () => {
					let createdAction = create();
					select(createdAction.id);
				}}>
					Create
				</button>
				<List
					items={ items }
					renderItem={ data => 
						<li 
							className='list-item'
							key={ data.get('id') }
							onClick={ () => select(data.get('id')) } >
								<span>{ data.get('name')}</span>
								<button 
									className='btn'
									onClick={ () => remove(data.get('id')) } >x</button>
						</li> } 
					/>
			</div>
			<EditableItem data={ selectedItem } fields={ fields } save={ update } />
		</section>
)}

const mapStateToProps = (state) => {
	let id = state.getIn(['people', 'selectedId']),
			item = state.getIn(['people', 'items', id])
  return {
		selectedItem: item || Immutable.Map(),
    items: state.getIn(['people', 'items']),
    fields: fields.people
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		create: bindActionCreators(peopleActions.create, dispatch),
		update: bindActionCreators(peopleActions.update, dispatch),
		remove: bindActionCreators(peopleActions.remove, dispatch),
		select: bindActionCreators(peopleActions.select, dispatch)
	}
}

EditPage = connect(mapStateToProps, mapDispatchToProps)(EditPage);

export default EditPage