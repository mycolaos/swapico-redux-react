import Immutable from 'immutable'
const { OrderedMap } = Immutable

import { peopleTypes } from '../constants/ActionTypes'

export default function people(state = Immutable.fromJS({
		selectedId: undefined,
		items: OrderedMap()
	}), action) {
		let items, item
		switch (action.type) {			
			case peopleTypes.SELECT:
				return state.set('selectedId', action.id);

			case peopleTypes.CREATE:
				items = state.get('items').set(action.id, action.data)
				return state.set('items', items);
				
			case peopleTypes.UPDATE:
				item = state.get('items').get(action.id).merge(action.data);
				items = state.get('items').set(action.id, item)
				return state.set('items', items)
				
			case peopleTypes.DELETE:
				items = state.get('items').delete(action.id);
				return state.set('items', items)

			default:
				return state;
		}
}