export default function (state={contacts: []}, actions) {
	console.log('Get contacts reducer', actions)
	switch(actions.type) {
		case "GET_CONTACTS":
			return Object.assign({}, state, { contacts: actions.payload || [] });
			break;
		default: 
			return state;
	}
}