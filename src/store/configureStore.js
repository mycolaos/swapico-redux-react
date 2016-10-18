import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

import Immutable from 'immutable'

export default function configureStore() {
  let initialState = loadState();

  if(initialState) {
    initialState = Immutable.fromJS(initialState, function (key, value) {
      var isIndexed = Immutable.Iterable.isIndexed(value);
      return isIndexed ? value.toList() : value.toOrderedMap();
    });
  } else {
    initialState = Immutable.Map({})
  }
  
  const logger = createLogger({ 
    stateTransformer: (state) => state.toJS() 
  })
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger))

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  store.subscribe(throttle(() => {
    saveState({
      people: store.getState().get('people').toJS()
    });
  }, 1000))

  return store
}