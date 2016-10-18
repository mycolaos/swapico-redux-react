import { combineReducers } from 'redux-immutablejs'

import people from './people'
import query from './query'

export default combineReducers({
  query,
  people
})