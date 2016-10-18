import Immutable from 'immutable'
import { v4 } from 'node-uuid'
import { peopleTypes } from '../constants/ActionTypes'

export const create = (data = {}) => {
	let id = v4()
	data.id = id

  return {
    type: peopleTypes.CREATE,
    data: Immutable.fromJS(data),
		id
	}
}

export const update = (id, data) => ({
  type: peopleTypes.UPDATE,
  data: Immutable.fromJS(data),
	id
})

export const remove = id => ({
  type: peopleTypes.DELETE,
  id
})

export const select = id => ({
  type: peopleTypes.SELECT,
  id
})