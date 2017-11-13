import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../index.css';
import {selectContact, getContacts} from '../actions/actions';

class Contactslist extends Component {
	constructor(props) {
		super(props);
		this.createContacts = this.createContacts.bind(this);
	}
	componentDidMount(){
		this.props.getContacts();
	}
	createContacts() {
		return this.props.contacts ? this.props.contacts.contacts.map((contact, id) => {
			return (
					<div className="separate-list" key={id}
					onClick={() => this.props.selectContact(contact)}>
		          <img alt="" src= {contact.img} className="icon-badge"/><br />
		           {contact.nickName}
	        	</div>
			)
		}) : null
	}
	
	render() {
		return (
		<div>
		<h2>Manage your contacts</h2>
		{this.createContacts()}
		</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		contacts: state.contacts
	}
}

function matchDispatchToProps(dispatch) {
	return { 
		selectContact : (contact) => dispatch(selectContact(contact)),
		getContacts: () => dispatch(getContacts())
	}
}

export default connect(mapStateToProps, matchDispatchToProps)(Contactslist);