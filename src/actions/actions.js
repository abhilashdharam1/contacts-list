import fetch from 'isomorphic-fetch';

export const selectContact = (contact) => {
	console.log('You clicked on contact', contact.firstName);
	return {
		type: "USER_SELECTED",
		payload: contact
	}
};

export function getContacts() {
	console.log('Get contacts')
	return (dispatch) => {
		fetch('/api/v1/contacts')
		.then(response => {
			return response.json()
		})
		.then(json => {
			dispatch({
				type: 'GET_CONTACTS',
				payload: json
			})
		})
		
	}
}