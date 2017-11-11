import {combineReducers} from 'redux';
import contactReducer from './data';
import activeUserReducer from './reducerActiveUser';

const allReducers = combineReducers({
	contacts: contactReducer,
	activeUser: activeUserReducer
});

export default allReducers;