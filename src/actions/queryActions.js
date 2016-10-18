import { logTypes, queryTypes, peopleTypes } from '../constants/ActionTypes'
import { endpoints } from '../constants/Api'
import { ROOT, SEARCH } from '../constants/Api'
import * as $ from 'jquery'

export const saveLocal = id => (
	(dispatch, getState) => {
    let query = getState().get('query'),
			item = query.get('items').find(item => item.get('id') === id),
			endpoint = query.get('endpoint'),
      types;

    switch(endpoint) {
      case endpoints.PEOPLE: types = peopleTypes
    }

    dispatch({
      type: types.CREATE,
      id: item.get('id'),
      data: item
    })
  })

export const selectEndpoint = endpoint => ({
  type: queryTypes.SET_ENDPOINT,
  endpoint
})

export const setEndpoint = endpoint => ({
		type: queryTypes.SET_ENDPOINT,
		endpoint
	})

export const search = (text, endpoint) => {
  return (dispatch) => {
    if(!endpoint) {
      return dispatch({
        type: logTypes.ERROR,
        message: 'No endpoint selected'
      })
    }

    dispatch({ type: queryTypes.GET_REQUEST })

    $.ajax({
      type: 'GET',
      url: `${ROOT}/${endpoint}${SEARCH}${text}`,
      contentType: 'application/json',
      success: (data) => {
        let results = data.results || []
        results.forEach(item => { item.id = item.url })
        dispatch({
          type: queryTypes.GET_SUCCESS,
          data: results
        })
      },  
      error: (error) => {
        dispatch({
          type: queryTypes.GET_ERROR,
          error
        })
      }
    })
  }
}