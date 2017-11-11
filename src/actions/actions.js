export const selectContact = (contact) => {
	console.log('You clicked on contact', contact.firstName);
	return {
		type: "USER_SELECTED",
		payload: contact
	}
};