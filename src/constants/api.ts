export const API_HOST = process.env.REACT_APP_API_URL as string
const API_PREFIX = '/api';

export const API_URL = `${API_HOST}${API_PREFIX}`;


export default {
    CONNECTION_TEST: API_URL + '/check-connection'
}