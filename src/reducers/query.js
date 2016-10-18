import Immutable from 'immutable'

import { queryTypes } from '../constants/ActionTypes'

export default function query(state = Immutable.fromJS({
    endpoint: '',
    requestState: undefined,
    requestMessage: undefined,
    items: []
}), action) {
    switch (action.type) {
        case queryTypes.GET_REQUEST: return state.set('requestState', action.requestState);
        case queryTypes.GET_SUCCESS: return state.set('items', Immutable.fromJS(action.data));
        case queryTypes.GET_ERROR: return state.withMutations(map => {
            map.
                set('requestState', action.requestState).
                set('requestMessage', action.message)
        });
        case queryTypes.SET_ENDPOINT: return state.set('endpoint', action.endpoint)
        default: return state;
    }   
}