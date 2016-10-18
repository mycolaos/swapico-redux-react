import { endpoints } from './Api'

export const logTypes = {
	ERROR: 'error'
}

export const queryTypes = {
	GET_REQUEST: 'get_request',
	GET_SUCCESS: 'get_success',
	GET_ERROR: 'get_error',
	SET_ENDPOINT: 'set_endpoint'
}

export const peopleTypes = createTypes(endpoints.PEOPLE)

function createTypes (NAME) {
	return {
		CREATE: `create_${NAME}`,
		UPDATE: `update_${NAME}`,
		DELETE: `delete_${NAME}`,
		SELECT: `select_${NAME}`
}}